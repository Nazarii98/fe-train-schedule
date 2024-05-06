import prisma from "../../../../lib/prisma";

export async function GET() {
  const data = await prisma.station.findMany();

  return Response.json(data);
}
