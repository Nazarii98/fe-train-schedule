import prisma from "../../../../lib/prisma";

export async function GET() {
  const data = await prisma.train.findMany();

  return Response.json(data);
}
