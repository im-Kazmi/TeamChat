"use client";
import { FaPlus } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";
import Modal from "./Modal";
import CreateServer from "../forms/CreateServer";
import { useForm } from "react-hook-form";
import { serverSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Servers from "./Servers";
import { Server } from "@prisma/client";

const ServersSidebar = ({ servers }: { servers: Server[] }) => {
  const form = useForm<z.infer<typeof serverSchema>>({
    resolver: zodResolver(serverSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  return (
    <div className=" bg-light-300 dark:bg-[#13181E] w-20 min-h-full bg-sidebar max-h-screen fixed flex flex-col justify-between">
      <div className=" mt-5 flex flex-col gap-4 mx-auto">
        <div className=" flex  space-x-1 mx-auto">
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-red"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-yellow"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-green"></span>
        </div>

        <Modal
          isCompleted={form.formState.isSubmitted}
          trigger={
            <button className=" bg-light-100 w-12 h-12 flex  items-center rounded-full text-black text-2xl justify-center text-status-online">
              <FaPlus />
            </button>
          }
          title={<h1 className=" text-2xl font-bold">Customize your server</h1>}
        >
          <div className=" flex flex-col gap-5">
            <h1>
              Give your server a name and an Image. You can change it later.
            </h1>
          </div>
          <CreateServer form={form} />
        </Modal>

        <hr className=" w-full px-3 mx-auto border border-light-500 dark:border-dark-200" />
        <Servers servers={servers} />
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col mx-auto gap-3">
          <ThemeToggle />
          <div className=" mx-auto">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServersSidebar;
