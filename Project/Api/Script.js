export default function handler(req, res) {

  // Lấy User-Agent từ client
  const ua = req.headers['user-agent'] || "";

  // Danh sách User-Agent của trình duyệt
  const blockedAgents = [
    "Mozilla", "Chrome", "Safari", "Edge", "Opera", "Firefox"
  ];

  // Nếu UA trùng với browser → chặn
  if (blockedAgents.some(agent => ua.includes(agent))) {
    return res.status(403).send("Access Denied");
  }

  // CODE BẠN MUỐN GIẤU (KHÔNG MÃ HÓA)
  const script = `
        print("Hello from hidden API")
        print("Script này không ai xem được trừ Roblox HttpGet")
        -- Code thật của bạn đặt dưới đây
  `;

  res.setHeader("Content-Type", "text/plain");
  return res.send(script);
}
