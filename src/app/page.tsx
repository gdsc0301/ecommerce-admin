import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { cookies } from "next/headers";

import { _e } from "./helpers/Dict";

import VisieLogo from "./admin/components/parts/VisieLogo";

import { NextPage } from "next";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import LoginForm from "./components/LoginForm";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";

// Login page
const Login = () => {

  return (
    <Modal isOpen
      size="md"
      hideCloseButton
      isDismissable={false}
    >
      <ModalContent>
        <ModalHeader className="relative flex-col">
          <VisieLogo className="w-full h-24 my-24 animate-pulse" />
          <h2 className="text-2xl"><_e>Login</_e></h2>
        </ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )  
}

export default Login;