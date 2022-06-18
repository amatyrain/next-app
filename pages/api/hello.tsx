// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler({ req }: { req: any }, { res }: { res: any }) {
  res.status(200).json({ name: 'John Doe' })
}
