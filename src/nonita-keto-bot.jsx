import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "5493434640388";

const SYSTEM_PROMPT = `Sos la asistente virtual de **Nonita Keto**, un emprendimiento de comida low carb/keto. Tu nombre es **Noni** y atendés con calidez, como una persona real, de forma cercana y en español argentino (tuteás).

## TU PERSONALIDAD
- Cálida, cercana, natural. Como una amiga que atiende, no una vendedora.
- Usás emojis con moderación, solo cuando suman.
- **MUY IMPORTANTE:** No avasallás con información. Si alguien dice "hola", respondés el saludo nomás y preguntás en qué le podés ayudar. Sin mencionar productos ni planes todavía.
- Escuchás primero. Solo hablás de productos cuando el cliente lo pregunta o muestra interés.
- Respondés siempre corto y natural. Máximo 2-3 oraciones salvo que te pidan info específica.
- Nunca largás todo el catálogo o menú de golpe sin que te lo pidan.

## 🧠 PSICOLOGÍA DE VENTAS (usar con muchísima moderación)

**REGLAS ESTRICTAS:**
- Usás UNA SOLA técnica en TODA la conversación, no en cada mensaje
- Solo la usás cuando surge de forma 100% natural, nunca forzada
- Si ya la usaste una vez, no volvés a usarla
- La mayoría de los mensajes son simplemente conversación normal sin ninguna técnica

**Las únicas técnicas permitidas, elegí UNA por conversación según el contexto:**

- **Anclaje de precio** (solo cuando pregunta el precio): "Son $90.000 por 10 viandas, $9.000 por comida con envío incluido"
- **Prueba social** (solo si duda o pregunta si es bueno): "Tenemos clientas que lo piden hace meses y no lo cambian"
- **Urgencia real** (solo si es verdad y es lunes): "Los pedidos cierran hoy, así que estás justo a tiempo"
- **Cierre suave** (solo cuando el cliente ya eligió todo): "¿Te lo anoto?"

**Lo que NUNCA hacés:**
- Repetir o insistir con beneficios después de haberlos mencionado
- Agregar frases de venta al final de cada respuesta
- Mencionar precio, urgencia o prueba social más de una vez

## EL NEGOCIO
**Nonita Keto** ofrece viandas y productos low carb/keto artesanales.

---

## 📦 CATÁLOGO COMPLETO

### 🥗 VIANDAS SEMANALES
- **Plan 10 viandas** (almuerzo + cena lunes a viernes) → **$90.000** con envío incluido
- Entrega: **martes de 12:30 a 13:30 hs**
- Menú semana 10/03/26:
  - Día 1: Canelones de Espinaca y Ricota con salsa boloñesa / Tarta de Jamón y Queso
  - Día 2: Milanesa Napolitana con ensalada / Pizza Keto
  - Día 3: Pechuga a la crema con champignon y brócoli / Empanada grande de Carne
  - Día 4: Bondiola de Cerdo a la olla con verduras / Mini Tarta de Zucchini
  - Día 5: Ravioles de Jamón y Ricota con estofado de pollo / Omelette de Acelga y Queso
  - EXTRAS: 5 pancitos de Harina de Almendras

### 🍰 PASTELERÍA
- Muffins de Arándanos o Marmolado x6 → $14.000
- Budín Frutos Secos o Arándanos → $12.000
- Alfajores H. Coco y Dulce de Leche x6 → $16.000
- Alfajores Triples c/Baño Choco Negro o Blanco x6 → $24.000
- Galletitas Pepito (chips choco) x10 → $12.000
- Galletitas Pepas c/Frutos Rojos x6 → $14.000
- Galletitas Pepa c/Frutos Rojos y Baño Choco x6 → $22.000
- Brownie c/Frutos Secos → $16.000
- Alfajor Coco Rallado / DdL y Baño Choco Blanco → $18.000
- Cuadraditos de Limón x6 → $18.000
- Conitos de DdL y Baño Choco Blanco o Negro x3 → $12.000
- Scons Dulces x10 → $16.000

### 🎂 TORTAS
- Marquise → $55.000
- Cheesecake 22cm → $55.000
- 4 Reinas (Tarta Bombón + Crumble Frutos Rojos + Ricota + Pastelera Limón) → $55.000
- Torta Alfajor DdL, Baño Choco y Pistacho → $55.000
- Torta Yogurth y Frutos Rojos → $45.000
- Torta Invertida Frutos Rojos → $45.000

### 🥨 PLANIFICACIÓN
- Marianas / Crackers / Suizos / Chipa / Medialunas / Malteadas / Grisines / Saborizado Salame → $12.000 c/u (200grs)
- Scons de Queso x10 → $18.000

### 🍞 PANES
- Pan de Molde → $22.000
- Pan de Hamburguesa x4 → $12.000
- Panes x6 → $16.000

### 🥟 EMPANADAS
- Empanadas Pirox / Jamón y Queso / Osobuco / Carne Salada x6 → $26.000 c/u

### 🥧 TARTAS
- Tarta Jamón y Queso → $28.000
- Tarta Brócoli / Acelga / Zapallito / Pizza Keto → $20.000 c/u

### 🍝 PASTAS (todas con salsa filetto)
- Ravioles x8 Jamón y Queso / Verduras / Ricota y Nuez → $15.000 c/u
- Malfatti x8 → $15.000
- Canelones x3 → $15.000

### 📦 BOXES
- Box Congelado (1 tapa tarta + 6 tapas empanadas) → $22.000
- Box Salado (3 panes + 4 chipa + 4 bastones + 4 beagels) → $28.000
- Box Goloso (2 Conitoa DdL + 3 Pepas + 3 Alfajores Triples Choco + 1 Mini Brownie + 1 Mini Marquise + 3 Alfajores Coco) → $55.000

### 🚚 ENVÍO
- Envío a domicilio → $5.000 (las viandas ya lo incluyen)

---

## FLUJO DE ATENCIÓN

1. Al saludar, preguntá el nombre del cliente para poder tutearla/o por su nombre durante toda la conversación
2. Una vez que te dé el nombre, usalo naturalmente en la charla (no en cada mensaje, con moderación)
3. Cuando el cliente pregunte, contale las categorías disponibles de a poco
3. Armá el pedido con los productos que elija, sumando el total correctamente
4. Preguntá **nombre completo**, **dirección de entrega** y **número de teléfono de contacto**
5. Sobre el horario de entrega:
   - Si el pedido incluye **viandas semanales**: avisá que la entrega es el **martes de 12:30 a 13:30** y preguntá si ese horario le viene bien
   - Si el pedido es solo de **otros productos** (pastelería, tortas, panes, etc.): preguntá qué **día y horario aproximado** le queda cómodo para coordinar la entrega
6. Mostrá el resumen del pedido con todos esos datos y el total
7. Indicá los datos bancarios para transferir
8. Cuando el cliente diga **"confirmo"**, respondé con entusiasmo que el pedido quedó registrado y que en breve le llega la confirmación

## DATOS DE PAGO
- **Alias:** jarra.farola.nacar
- **Titular:** Godoy Elsa Ramona
- El monto es el total del pedido

## IMPORTANTE SOBRE EL RESUMEN FINAL
Antes de dar los datos de pago, siempre mostrá un resumen claro con:
- Productos pedidos
- Dirección de entrega
- Nombre del cliente
- **Total a pagar**

Respondé siempre en español argentino, de forma cálida y concisa.`;

// Extrae datos del pedido usando IA
const EXTRACT_PROMPT = `Analizá esta conversación de un chat de ventas y extraé los datos del pedido en JSON.
Devolvé SOLO el JSON, sin texto extra ni backticks:
{
  "nombre": "nombre completo del cliente o null",
  "direccion": "dirección de entrega o null",
  "telefono": "número de teléfono de contacto o null",
  "horario": "horario preferido de entrega o null",
  "productos": ["lista de productos pedidos"],
  "total": "monto total como número sin puntos ni símbolos, o null"
}`;

export default function NonitaKetoChatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! 👋 Soy Noni, la asistente de Nonita Keto. ¿Con quién tengo el gusto?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [pedidoListo, setPedidoListo] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const callClaude = async (msgs, systemOverride = null) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemOverride || SYSTEM_PROMPT,
        messages: msgs.map(m => ({ role: m.role, content: m.content })),
      }),
    });
    const data = await response.json();
    return data.content?.map(b => b.text || "").join("") || "";
  };

  const extractAndSendOrder = async (conversacion) => {
    try {
      const textoConversacion = conversacion
        .map(m => `${m.role === "user" ? "Cliente" : "Noni"}: ${m.content}`)
        .join("\n");

      const raw = await callClaude(
        [{ role: "user", content: textoConversacion }],
        EXTRACT_PROMPT
      );

      let datos = {};
      try {
        datos = JSON.parse(raw.replace(/```json|```/g, "").trim());
      } catch {
        datos = { nombre: "No detectado", direccion: "No detectada", productos: [], total: null };
      }

      const productosTexto = datos.productos?.length > 0
        ? datos.productos.join("\n   • ")
        : "Ver conversación";

      const totalTexto = datos.total
        ? `$${Number(datos.total).toLocaleString("es-AR")}`
        : "Ver conversación";

      const waText = encodeURIComponent(
        `🥗 *NUEVO PEDIDO — Nonita Keto*\n\n` +
        `👤 *Cliente:* ${datos.nombre || "No detectado"}\n` +
        `📱 *Teléfono:* ${datos.telefono || "No detectado"}\n` +
        `📍 *Dirección:* ${datos.direccion || "No detectada"}\n` +
        `🕐 *Horario preferido:* ${datos.horario || "No especificado"}\n\n` +
        `🛒 *Productos:*\n   • ${productosTexto}\n\n` +
        `💰 *Total:* ${totalTexto}\n\n` +
        `📅 *Entrega:* Martes · 12:30–13:30 hs\n\n` +
        `_Bot Noni ✅_`
      );

      setWaUrl(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`);
      setPedidoListo(true);
    } catch (err) {
      console.error("Error extrayendo pedido:", err);
    }
  };

  const confirmarEnvio = () => {
    if (waUrl) {
      window.open(waUrl, "_blank");
      setPedidoEnviado(true);
      setPedidoListo(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input.trim() };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    try {
      const reply = await callClaude(newMsgs);
      const updated = [...newMsgs, { role: "assistant", content: reply }];
      setMessages(updated);

      // Si el cliente dice "confirmo", extraer datos y enviar a WhatsApp
      const textoUsuario = input.trim().toLowerCase();
      if (!pedidoEnviado && (textoUsuario === "confirmo" || textoUsuario.includes("confirmo"))) {
        await extractAndSendOrder(updated);
      }

    } catch {
      setMessages(p => [...p, { role: "assistant", content: "Ups, hubo un error. ¡Intentá de nuevo! 😊" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const renderContent = (text) => text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "#0b1a0b",
      display: "flex", flexDirection: "column",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      {/* Header fijo — estilo WhatsApp */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a10 0%, #2d4a1e 100%)",
        padding: "10px 16px",
        display: "flex", alignItems: "center", gap: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        zIndex: 10, flexShrink: 0,
      }}>
        <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #86bc42, #5a9e1a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>🥗</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#e8f5d0", fontSize: "16px", fontWeight: "700", lineHeight: 1.2 }}>Nonita Keto</div>
          <div style={{ color: "#86bc42", fontSize: "12px" }}>● En línea · Noni te atiende</div>
        </div>
      </div>

      {/* Fondo tipo WhatsApp con patrón */}
      <div style={{
        flex: 1, overflowY: "auto", overflowX: "hidden",
        padding: "12px 10px",
        display: "flex", flexDirection: "column", gap: "4px",
        background: "#0d1f0d",
        scrollbarWidth: "thin", scrollbarColor: "rgba(134,188,66,0.2) transparent",
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            marginBottom: "2px",
            animation: "fadeIn 0.2s ease",
          }}>
            <div style={{
              maxWidth: "80%",
              padding: "8px 12px 6px",
              borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
              background: msg.role === "user" ? "#005c4b" : "#1e3a10",
              color: "#e8f5d0",
              fontSize: "15px", lineHeight: "1.5",
              boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
              borderTop: msg.role === "assistant" ? "1px solid rgba(134,188,66,0.15)" : "none",
              borderLeft: msg.role === "assistant" ? "1px solid rgba(134,188,66,0.15)" : "none",
            }} dangerouslySetInnerHTML={{ __html: renderContent(msg.content) }} />
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "2px" }}>
            <div style={{ padding: "10px 16px", borderRadius: "12px 12px 12px 2px", background: "#1e3a10", border: "1px solid rgba(134,188,66,0.15)", display: "flex", gap: "4px", alignItems: "center" }}>
              {[0,1,2].map(j => <div key={j} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#86bc42", animation: `bounce 1.2s ease-in-out ${j*0.2}s infinite` }} />)}
            </div>
          </div>
        )}

        {pedidoListo && !pedidoEnviado && (
          <div style={{ background: "rgba(134,188,66,0.1)", border: "1px solid rgba(134,188,66,0.3)", borderRadius: "12px", padding: "12px", textAlign: "center", margin: "8px 0", animation: "fadeIn 0.4s ease" }}>
            <p style={{ color: "#d4ebb8", fontSize: "13px", margin: "0 0 10px" }}>✅ Pedido listo. Tocá para enviar los datos a Nonita.</p>
            <button onClick={confirmarEnvio} style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", border: "none", borderRadius: "10px", color: "white", fontWeight: "700", fontSize: "14px", padding: "10px 20px", cursor: "pointer", width: "100%" }}>
              📱 Enviar pedido por WhatsApp
            </button>
          </div>
        )}

        {pedidoEnviado && (
          <div style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", borderRadius: "12px", padding: "12px 16px", textAlign: "center", color: "#25D366", fontSize: "14px", margin: "8px 0" }}>
            ✅ Pedido enviado · ¡Nos vemos el martes! 🎉
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input fijo abajo — estilo WhatsApp */}
      <div style={{
        background: "#1a2e1a",
        padding: "8px 10px",
        display: "flex", gap: "8px", alignItems: "flex-end",
        borderTop: "1px solid rgba(134,188,66,0.1)",
        flexShrink: 0,
      }}>
        <textarea
          value={input}
          onChange={e => {
            setInput(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
          }}
          onKeyDown={handleKeyDown}
          placeholder={pedidoEnviado ? "Pedido confirmado ✅" : "Escribí un mensaje..."}
          disabled={pedidoEnviado}
          rows={1}
          style={{
            flex: 1, background: "#2a3e2a",
            border: "none", borderRadius: "22px",
            padding: "10px 16px", color: "#e8f5d0",
            fontSize: "15px", fontFamily: "inherit",
            resize: "none", outline: "none",
            lineHeight: "1.4", maxHeight: "100px",
            overflowY: "auto",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim() || pedidoEnviado}
          style={{
            width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
            background: loading || !input.trim() || pedidoEnviado ? "#2a3e2a" : "linear-gradient(135deg, #86bc42, #5a9e1a)",
            border: "none", cursor: loading || !input.trim() || pedidoEnviado ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px", transition: "all 0.2s ease",
          }}>
          {loading ? "⏳" : "➤"}
        </button>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; overflow: hidden; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,60%,100% { transform:translateY(0); } 30% { transform:translateY(-5px); } }
        textarea::placeholder { color: rgba(134,188,66,0.35); }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: rgba(134,188,66,0.2); border-radius: 2px; }
      `}</style>
    </div>
  );
}
