import React, { useState } from "react";
import "./index.css";

// FAQ Data
const faqList = [
  {
    q: "What is DCOM and what is its purpose?",
    a: "DCOM (Decentralized Community Coin) is a blockchain-based token designed to boost community engagement and governance within cooperatives and similar organizations."
  },
  {
    q: "How does DCOM benefit cooperatives and their members?",
    a: "DCOM tokens serve as incentives for active participation, reward loyalty, and enable transparent governance, helping cooperatives increase member engagement and trust."
  },
  {
    q: "How can I acquire or participate in DCOM?",
    a: "You can obtain DCOM tokens by joining official token sales or through exchanges once the token is listed. Follow our official channels for updates on purchasing opportunities."
  },
  {
    q: "Is the DCOM token legally compliant and secure?",
    a: "DCOM is designed as a utility token and does not represent equity in any entity. We are committed to complying with relevant regulations, and the project’s smart contracts are audited for security."
  },
  {
    q: "What are the risks of investing in DCOM?",
    a: "Investing in any cryptocurrency, including DCOM, carries risk. Token prices can be very volatile, and there are no guaranteed returns. Always do your own research and consider your risk tolerance before investing."
  }
];

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  return (
    <div className="text-white bg-gray-900 font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-800">
        <h1 className="text-5xl font-bold mb-4">Decentralized Community Coin (DCOM)</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">Empowering cooperatives through blockchain-based governance, rewards, and transparency.</p>
        {account ? (
          <p className="text-green-300">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
        ) : (
          <button onClick={connectWallet} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition">🪪 Connect Wallet</button>
        )}
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About DCOM</h2>
        <p className="text-lg text-gray-300">DCOM helps cooperatives overcome low participation and trust issues by rewarding members for active engagement. It uses blockchain and decentralized identity (DID) to enable transparent voting and token-based incentives.</p>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-800 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "DID-Based Governance", desc: "Secure identity-based voting system for transparent decision-making." },
              { title: "Tokenized Incentives", desc: "Reward members with DCOM tokens for participation and loyalty." },
              { title: "ESG Focus", desc: "Promotes sustainable and ethical growth through community cooperation." }
            ].map((f, i) => (
              <div key={i} className="bg-gray-700 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqList.map((item, index) => (
              <details key={index} className="bg-gray-800 rounded-md text-gray-100">
                <summary className="cursor-pointer p-4 font-medium hover:bg-gray-700 rounded-md">{item.q}</summary>
                <div className="px-4 pb-4 text-gray-300 text-sm">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-md p-6 text-gray-300 text-sm">
          <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Not Financial Advice: Content is for informational purposes only.</li>
            <li>Investment Risk: Cryptocurrency is volatile and may result in loss.</li>
            <li>No Ownership: DCOM tokens do not represent equity or rights.</li>
            <li>Compliance: Users must comply with local regulations.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-gray-700 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#features" className="hover:text-yellow-400">Features</a>
            <a href="#faq" className="hover:text-yellow-400">FAQ</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              🌐 <span className="hover:text-yellow-400 cursor-pointer">EN</span>
              <span className="text-gray-500">/</span>
              <span className="hover:text-yellow-400 cursor-pointer">ID</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © 2025 DCOM Foundation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
