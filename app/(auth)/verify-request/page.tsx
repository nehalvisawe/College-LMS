import { Suspense } from "react";
import VerifyRequestClient from "./verifyRequest";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyRequestClient />
    </Suspense>
  );
}