"use client";

import React from "react";
import Head from "next/head";
import { Trans } from "@lingui/react/macro";

export const HomePage = () => {
  return (
    <div>
      <p>
        <Trans>Simple example</Trans>
      </p>

      <p>
        <Trans>
          By clicking <strong>Log In</strong> above, you acknowledge that you
          have read, understood, and agree to our <span>Privacy Policy</span>{" "}
          and <span>Terms of Use</span>.
        </Trans>
      </p>
    </div>
  );
};
