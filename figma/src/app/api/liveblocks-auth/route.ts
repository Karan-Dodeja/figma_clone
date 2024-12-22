import { Liveblocks } from "@liveblocks/node";
import { LiveblocksProvider } from "@liveblocks/react";
import { auth } from "~/server/auth";

const liveBlocks = new Liveblocks({ secret: "hello" });

export async function POST(req: Request) {
  const userSession = await auth();
}
