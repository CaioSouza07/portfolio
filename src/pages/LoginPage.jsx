import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import Clock from "../components/Clock";
import Button from "../components/Button";
import Panel from "../components/Panel";
import CaiOSIcon from "../assets/caios.png";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [nickname, setNickname] = useState("");

  // Simula login — qualquer senha funciona, campo vazio bloqueia
  function handleLogin(e) {
    e.preventDefault();
    if (!nickname.trim()) {
      setError("Digite um apelido para continuar.");
      return;
    }
    setError("");
    login(nickname);
    navigate("/");
  }

  return (
    /* Fundo gradiente Windows XP/Vista */
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center select-none"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 40%, #1e6bb8 0%, #0d3d7a 45%, #061e45 100%)",
      }}
    >
      {/* Estrelas de fundo decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.6 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Painel principal */}
      <div className="relative w-full max-w-sm mx-4">
        {/* Barra de título azul estilo Windows */}
        <div
          className="rounded-t-sm px-3 py-1.5 flex items-center gap-2"
          style={{
            background:
              "linear-gradient(180deg, #4a90e2 0%, #1a5ab8 50%, #0d3d8a 100%)",
            borderBottom: "1px solid #0a2a60",
          }}
        >
          {/* Ícone Windows */}
          {/* <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="7" height="7" fill="#f35" />
            <rect x="9" y="0" width="7" height="7" fill="#3c3" />
            <rect x="0" y="9" width="7" height="7" fill="#33f" />
            <rect x="9" y="9" width="7" height="7" fill="#fa0" />
          </svg> */}
          <img src={CaiOSIcon} alt="" className="w-4 h-4 object-contain" />
          <span className="text-white text-xs font-bold tracking-wide drop-shadow">
            CaiOS
          </span>
        </div>

        {/* Corpo do painel */}
        <Panel>
          {/* Faixa superior com logo */}
          <div
            className="px-6 pt-6 pb-4 text-center border-b border-[#9abcd8]"
            style={{
              background: "linear-gradient(180deg, #e8f2fc 0%, #d0e4f5 100%)",
            }}
          >
            <p
              className="text-2xl font-bold tracking-widest mb-1"
              style={{
                color: "#1a4a8a",
                textShadow: "0 1px 0 rgba(255,255,255,0.8)",
                fontFamily: "'Trebuchet MS', Tahoma, sans-serif",
              }}
            >
              CaiOS
            </p>
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#4a7ab0", fontFamily: "Tahoma, sans-serif" }}
            >
              Portfolio Edition
            </p>
          </div>

          {/* Área de login */}
          <form
            onSubmit={handleLogin}
            className="px-6 py-6 flex flex-col items-center gap-4"
          >
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full shadow-[0_0_0_3px_#4a90e2,0_0_0_5px_#1a4a8a,0_4px_12px_rgba(0,0,0,0.5)]"
              style={{ background: "#1a4a8a" }}
            >
              {/*AQUI VAI UMA IMAGEM - ICONE DE USUSARIO*/}
            </div>

            {/* Nome do usuário */}
            <div className="text-center">
              <p
                className="text-base font-bold"
                style={{
                  color: "#1a3a6a",
                  fontFamily: "Tahoma, sans-serif",
                  textShadow: "0 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                {nickname}
              </p>
            </div>

            {/* Campo de senha */}
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-xs font-bold text-[#1a3a6a]"
                style={{ fontFamily: "Tahoma, sans-serif" }}
              >
                Apelido:
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                    setError("");
                  }}
                  placeholder="Digite um apelido..."
                  className="w-full px-2 py-1.5 text-sm pr-8 border-2 border-[#7ab0e8] bg-white focus:border-[#1a5ab8] focus:outline-none shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"
                  style={{
                    fontFamily: "Tahoma, sans-serif",
                    borderRadius: "2px",
                  }}
                  autoFocus
                />
                {/* Olhinho */}
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4a7ab0] hover:text-[#1a4a8a] cursor-pointer"
                >
                  {showPass ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Erro */}
              {error && (
                <p
                  className="text-xs text-red-700 mt-0.5"
                  style={{ fontFamily: "Tahoma, sans-serif" }}
                >
                  ⚠ {error}
                </p>
              )}
            </div>

            {/* Botão entrar */}
            <div className="w-full flex justify-end mt-1">
              <Button type="submit">Entrar &nbsp;→</Button>
            </div>

            {/* Dica */}
            <p
              className="text-[10px] text-center text-[#4a6a8a] border-t border-[#9abcd8] pt-3 w-full"
              style={{ fontFamily: "Tahoma, sans-serif" }}
            >
              Digite qualquer apelido para continuar.
            </p>
          </form>
        </Panel>

        {/* Rodapé estilo XP */}
        <div
          className="rounded-b-sm px-3 py-1.5 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #0d3d8a 0%, #061e45 100%)",
            borderTop: "1px solid #0a2a60",
          }}
        >
          <span
            className="text-[10px] text-[#88aad0]"
            style={{ fontFamily: "Tahoma, sans-serif" }}
          >
            © 2026 Caio de Souza
          </span>
          <span
            className="text-[10px] text-[#88aad0]"
            style={{ fontFamily: "Tahoma, sans-serif" }}
          >
            Portfolio v1.0
          </span>
        </div>
      </div>

      {/* Relógio no canto — detalhinho de SO */}
      <Clock />
    </div>
  );
}

export default LoginPage;
