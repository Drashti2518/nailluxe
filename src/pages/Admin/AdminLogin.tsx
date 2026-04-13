import React, { useState } from "react";

interface Props {
  onLogin: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = () => {
    if (password === "Nail@Admin2026") {
      localStorage.setItem("isAdmin", "true"); // ✅ ADD
  setIsSuccess(true);
  setError("");
  setTimeout(() => onLogin(), 900);
    } else {
      setError("Wrong password. Please try again.");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes floatIn {
          0%   { opacity: 0; transform: translateY(36px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%     { transform: translateX(-8px); }
          40%     { transform: translateX(8px); }
          60%     { transform: translateX(-5px); }
          80%     { transform: translateX(5px); }
        }
        @keyframes fadeSlideIn {
          0%   { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0);    }
        }
        @keyframes orbDrift1 {
          0%,100% { transform: translate(0,0)    scale(1);    }
          50%     { transform: translate(20px,-16px) scale(1.08); }
        }
        @keyframes orbDrift2 {
          0%,100% { transform: translate(0,0)    scale(1);    }
          50%     { transform: translate(-16px,20px) scale(1.06); }
        }
        @keyframes orbDrift3 {
          0%,100% { transform: translate(0,0);    }
          50%     { transform: translate(10px,12px); }
        }
        @keyframes lockWiggle {
          0%,100% { transform: rotate(0deg);  }
          25%     { transform: rotate(-10deg); }
          75%     { transform: rotate(10deg);  }
        }
        @keyframes successPulse {
          0%   { box-shadow: 0 0 0 0 rgba(99,153,34,0.35);  }
          70%  { box-shadow: 0 0 0 14px rgba(99,153,34,0);   }
          100% { box-shadow: 0 0 0 0 rgba(99,153,34,0);      }
        }
        @keyframes dotBounce {
          0%,80%,100% { transform: translateY(0);    }
          40%          { transform: translateY(-7px); }
        }
        @keyframes ringPulse {
          0%   { box-shadow: 0 0 0 0px rgba(212,83,126,0.3); }
          100% { box-shadow: 0 0 0 10px rgba(212,83,126,0);  }
        }

        .al-wrap {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fdf6f9;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        /* Floating orbs */
        .al-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .al-orb-1 {
          width: 260px; height: 260px;
          background: radial-gradient(circle, #f4c0d1 0%, transparent 70%);
          top: -80px; left: -80px;
          opacity: 0.55;
          animation: orbDrift1 8s ease-in-out infinite;
        }
        .al-orb-2 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #b5d4f4 0%, transparent 70%);
          bottom: -60px; right: -60px;
          opacity: 0.5;
          animation: orbDrift2 10s ease-in-out infinite;
        }
        .al-orb-3 {
          width: 130px; height: 130px;
          background: radial-gradient(circle, #c0dd97 0%, transparent 70%);
          bottom: 60px; left: 30px;
          opacity: 0.4;
          animation: orbDrift3 6s ease-in-out infinite;
        }

        /* Card */
        .al-card {
          background: #ffffff;
          border: 1px solid #f0d8e4;
          border-radius: 28px;
          padding: 2.8rem 2.2rem;
          width: 340px;
          position: relative;
          z-index: 1;
          animation: floatIn 0.65s cubic-bezier(0.34,1.56,0.64,1) both;
          transition: box-shadow 0.3s;
        }
        .al-card:hover {
          box-shadow: 0 20px 60px rgba(212,83,126,0.08);
        }
        .al-card.shake {
          animation: shake 0.45s ease both;
        }
        .al-card.success {
          animation: successPulse 0.7s ease;
          border-color: #9ed46d;
        }

        /* Icon */
        .al-icon {
          text-align: center;
          font-size: 38px;
          margin-bottom: 0.4rem;
          display: block;
          animation: lockWiggle 4s ease-in-out infinite;
          user-select: none;
        }

        /* Headings */
        .al-title {
          font-family: 'DM Serif Display', serif;
          font-size: 26px;
          font-weight: 400;
          color: #2c1a22;
          text-align: center;
          margin: 0 0 0.3rem;
          letter-spacing: -0.01em;
        }
        .al-subtitle {
          font-size: 13px;
          color: #b084a0;
          text-align: center;
          margin: 0 0 2rem;
        }

        /* Label */
        .al-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #993556;
          margin-bottom: 6px;
        }

        /* Input wrapper */
        .al-input-wrap {
          position: relative;
          margin-bottom: 1.2rem;
        }
        .al-input {
          width: 100%;
          box-sizing: border-box;
          padding: 12px 44px 12px 14px;
          border-radius: 14px;
          border: 1.5px solid #f4c0d1;
          background: #fff8fb;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #2c1a22;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .al-input:focus {
          border-color: #D4537E;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(212,83,126,0.1);
        }
        .al-input::placeholder { color: #cda5b8; }
        .al-eye {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #c490ae;
          padding: 0;
          line-height: 1;
          transition: color 0.2s;
        }
        .al-eye:hover { color: #D4537E; }

        /* Error */
        .al-error {
          font-size: 13px;
          color: #993556;
          background: #fbeaf0;
          border-radius: 10px;
          padding: 8px 12px;
          text-align: center;
          margin-bottom: 1rem;
          animation: fadeSlideIn 0.3s ease both;
        }

        /* Button */
        .al-btn {
          width: 100%;
          padding: 13px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.03em;
          transition: opacity 0.2s, transform 0.15s, background 0.4s;
          position: relative;
          overflow: hidden;
        }
        .al-btn-normal {
          background: linear-gradient(135deg, #e06585 0%, #c44d7a 100%);
          color: #fff;
        }
        .al-btn-normal:hover  { opacity: 0.88; }
        .al-btn-normal:active { transform: scale(0.97); }
        .al-btn-success {
          background: linear-gradient(135deg, #7cb83e 0%, #5a9e25 100%);
          color: #fff;
          animation: ringPulse 0.6s ease-out;
        }

        /* Dots */
        .al-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 1.4rem;
        }
        .al-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #f4c0d1;
          animation: dotBounce 1.4s ease-in-out infinite;
        }
        .al-dot:nth-child(2) { animation-delay: 0.18s; background: #b5d4f4; }
        .al-dot:nth-child(3) { animation-delay: 0.36s; background: #c0dd97; }
      `}</style>

      <div className="al-wrap">
        <div className="al-orb al-orb-1" />
        <div className="al-orb al-orb-2" />
        <div className="al-orb al-orb-3" />

        <div
          className={`al-card ${isShaking ? "shake" : ""} ${isSuccess ? "success" : ""}`}
        >
          <span className="al-icon">🔐</span>
          <h2 className="al-title">Admin Login</h2>
          <p className="al-subtitle">Enter your password to continue</p>

          {error && <p className="al-error">{error}</p>}

          <label className="al-label" htmlFor="al-pw">Password</label>
          <div className="al-input-wrap">
            <input
              id="al-pw"
              className="al-input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              autoComplete="current-password"
            />
            <button
              className="al-eye"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              title="Toggle visibility"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <button
            className={`al-btn ${isSuccess ? "al-btn-success" : "al-btn-normal"}`}
            onClick={handleLogin}
            disabled={isSuccess}
          >
            {isSuccess ? "✓ Welcome!" : "Login"}
          </button>

          <div className="al-dots">
            <div className="al-dot" />
            <div className="al-dot" />
            <div className="al-dot" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;