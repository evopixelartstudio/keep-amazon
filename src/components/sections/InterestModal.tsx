"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InterestModal({ isOpen, onClose }: InterestModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    interestProfile: "consumidor",
    message: "",
    privacyConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [responseStatus, setResponseStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    details?: string;
  }>({ type: null, message: "" });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Limpa erro do campo modificado
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseStatus({ type: null, message: "" });

    // Validação local prévia
    const clientErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      clientErrors.fullName = "Nome completo é obrigatório.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      clientErrors.email = "Insira um e-mail válido.";
    }
    if (!formData.whatsapp || formData.whatsapp.replace(/\D/g, "").length < 10) {
      clientErrors.whatsapp = "WhatsApp deve conter DDD e número (mínimo 10 dígitos).";
    }
    if (!formData.privacyConsent) {
      clientErrors.privacyConsent = "Você precisa concordar com o tratamento dos dados.";
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseStatus({
          type: "success",
          message: data.message,
          details:
            data.status === "validated_pending_integration"
              ? "Status do ambiente: Validação técnica concluída pela API interna. Para despacho a webhook externo ou CRM, defina a variável LEAD_WEBHOOK_URL."
              : undefined,
        });
      } else {
        setResponseStatus({
          type: "error",
          message: data.message || "Não foi possível concluir o envio.",
        });
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setResponseStatus({
        type: "error",
        message: "Erro de conexão ao enviar o formulário. Verifique sua internet.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#10171D]/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E8EBDD] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Topo do Modal */}
        <div className="bg-[#10171D] px-6 sm:px-8 py-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo theme="light" />
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar formulário de adesão"
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Formulário */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#C8F31D]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#666B70]">
                Adesão & Parcerias
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold text-[#10171D] tracking-tight">
              Faça parte da Keep Amazon
            </h2>
            <p className="text-sm text-[#666B70] leading-relaxed">
              Preencha os dados abaixo para manifestar seu interesse nas iniciativas da bioeconomia.
            </p>
          </div>

          {/* Feedback de Resposta */}
          {responseStatus.type === "success" && (
            <div className="p-4 bg-[#F1F5DC] border border-[#d8e3b5] rounded-2xl flex gap-3 text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm space-y-1">
                <p className="font-semibold text-slate-900">{responseStatus.message}</p>
                {responseStatus.details && (
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {responseStatus.details}
                  </p>
                )}
              </div>
            </div>
          )}

          {responseStatus.type === "error" && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex gap-3 text-rose-800">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold">{responseStatus.message}</p>
              </div>
            </div>
          )}

          {/* Formulário Interativo */}
          {responseStatus.type !== "success" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10171D] mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Seu nome ou da sua organização"
                  required
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10171D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8F31D] ${
                    errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-[#E8EBDD] bg-slate-50/50"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-xs text-rose-600 mt-1 block">{errors.fullName}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#10171D] mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contato@exemplo.com"
                    required
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10171D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8F31D] ${
                      errors.email ? "border-rose-400 bg-rose-50/30" : "border-[#E8EBDD] bg-slate-50/50"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-600 mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#10171D] mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(92) 99999-9999"
                    required
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#10171D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8F31D] ${
                      errors.whatsapp ? "border-rose-400 bg-rose-50/30" : "border-[#E8EBDD] bg-slate-50/50"
                    }`}
                  />
                  {errors.whatsapp && (
                    <span className="text-xs text-rose-600 mt-1 block">{errors.whatsapp}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10171D] mb-1.5">
                  Perfil de interesse *
                </label>
                <select
                  name="interestProfile"
                  value={formData.interestProfile}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EBDD] bg-slate-50/50 text-sm text-[#10171D] focus:outline-none focus:ring-2 focus:ring-[#C8F31D]"
                >
                  <option value="consumidor">Consumidor consciente</option>
                  <option value="produtor">Produtor regional / comunitário</option>
                  <option value="empresa">Empresa parceira</option>
                  <option value="instituicao">Instituição de ensino ou pesquisa</option>
                  <option value="outro">Outro interesse</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10171D] mb-1.5">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Conte um pouco sobre como gostaria de colaborar..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8EBDD] bg-slate-50/50 text-sm text-[#10171D] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C8F31D]"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded text-[#10171D] border-gray-300 focus:ring-[#C8F31D]"
                  />
                  <span className="text-xs text-[#666B70] leading-snug">
                    Concordo em compartilhar meus dados para contato sobre as iniciativas da Keep Amazon, em conformidade com as boas práticas de privacidade.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <span className="text-xs text-rose-600 mt-1 block">{errors.privacyConsent}</span>
                )}
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-[#666B70] hover:text-[#10171D] hover:bg-slate-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold bg-[#C8F31D] text-[#10171D] hover:bg-[#d5f73c] transition-all disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(200,243,29,0.4)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar manifestação</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#10171D] text-white hover:bg-slate-800 transition-colors"
              >
                Concluir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

