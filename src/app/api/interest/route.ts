import { NextResponse } from "next/server";

interface InterestRequestBody {
  fullName: string;
  email: string;
  whatsapp: string;
  interestProfile: string;
  message?: string;
  privacyConsent: boolean;
}

export async function POST(request: Request) {
  try {
    const body: InterestRequestBody = await request.json();

    // Validação estrita dos campos obrigatórios
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 3) {
      errors.fullName = "Por favor, informe seu nome completo (mínimo de 3 caracteres).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      errors.email = "Por favor, informe um endereço de e-mail válido.";
    }

    const cleanPhone = (body.whatsapp || "").replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.whatsapp = "Por favor, informe um WhatsApp válido com DDD (mínimo 10 dígitos).";
    }

    const allowedProfiles = ["consumidor", "produtor", "empresa", "instituicao", "outro"];
    if (!body.interestProfile || !allowedProfiles.includes(body.interestProfile)) {
      errors.interestProfile = "Selecione um perfil de interesse válido.";
    }

    if (!body.privacyConsent) {
      errors.privacyConsent = "É necessário concordar com a política de privacidade para continuar.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Existem campos pendentes ou incorretos no formulário.",
        },
        { status: 400 }
      );
    }

    // Verificação de serviço externo configurado (ex: CRM, webhook, e-mail)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (webhookUrl || resendApiKey) {
      // Caso exista um webhook configurado, despacha o payload com segurança
      if (webhookUrl) {
        try {
          const upstream = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...body,
              submittedAt: new Date().toISOString(),
              source: "Keep Amazon Landing Page",
            }),
          });

          if (!upstream.ok) {
            throw new Error(`Upstream respondeu com status ${upstream.status}`);
          }

          return NextResponse.json({
            success: true,
            status: "dispatched",
            message: "Seu cadastro foi recebido com sucesso! Em breve entraremos em contato.",
          });
        } catch (dispatchErr) {
          console.error("Erro ao despachar lead para webhook configurado:", dispatchErr);
          return NextResponse.json(
            {
              success: false,
              message: "Houve uma instabilidade momentânea na conexão do serviço. Tente novamente mais tarde.",
            },
            { status: 502 }
          );
        }
      }
    }

    // Se não há serviço de recebimento externo configurado em ambiente:
    // Conforme especificação: indicar com transparência o status técnico sem simular envio fictício.
    return NextResponse.json({
      success: true,
      status: "validated_pending_integration",
      message:
        "Dados validados com sucesso! A estrutura de integração está concluída e aguarda a configuração da chave de destino (LEAD_WEBHOOK_URL ou RESEND_API_KEY).",
    });
  } catch (err) {
    console.error("Erro no processamento do formulário de interesse:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno ao processar a solicitação. Verifique os dados e tente novamente.",
      },
      { status: 500 }
    );
  }
}
