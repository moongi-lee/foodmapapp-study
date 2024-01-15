import type { NextApiRequest, NextApiResponse } from 'next'
import { StoreApiResponse, StoreType } from '@/interface'
import { PrismaClient } from '@prisma/client'
import prisma from '@/db'

interface ResponseType {
  page?: string;
  limit?: string;
  q?: string;
  district? : string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StoreApiResponse | StoreType[] | StoreType>
) {
  const { page = "", limit = "", q, district }:ResponseType = req.query;

  console.log(page)

  if (page) {
    const count = await prisma.store.count();
    const skipPage = parseInt(page) - 1 ;
    const stores = await prisma.store.findMany({
      orderBy: {id:"asc"},
      where: {
        name: q ? { contains: q } : {},
        address: district ? { contains: district } : {},
      },
      take: parseInt(limit),
      skip: skipPage * 10,
    });
    // totalpage, data, page, totalCount
    res.status(200).json({
      page: parseInt(page),
      data: stores,
      totalCount: count,
      totalPage: Math.ceil(count / 10),
    });

  } else {
    const {id}:{id?: string} = req.query;

    const stores = await prisma.store.findMany({
      orderBy: {id:"asc"},
      where: {
        id: id ? parseInt(id) : {},
      }
    });
    res.status(200).json(id ? stores[0] : stores);
  }
}
