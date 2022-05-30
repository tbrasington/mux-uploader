import Mux from "@mux/mux-node";
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next/types";

const { Video } = new Mux();

export default async function uploadHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const session = await getSession({ req });
  if (session) {
    switch (method) {
      case "POST":
        try {
          const upload = await Video.Uploads.create({
            new_asset_settings: { playback_policy: "public" },
            cors_origin: process.env.NEXTAUTH_URL,
          });
          res.json({
            id: upload.id,
            url: upload.url,
          });
        } catch (e) {
          console.error("Request error", e);
          res.status(500).json({ error: "Error creating upload" });
        }
        break;
      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } else {
    res.status(401).json({ error: "You are not authorised" });
  }
}
