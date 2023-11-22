"use client";
import { fakeServers } from "@/constants";
import { FaPlus } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";
import ServerCard from "./ServerCard";
import ThemeToggle from "./ThemeToggle";
import Modal from "./Modal";
import { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serverSchema } from "@/lib/validations";
import z from "zod";
import { Input } from "../ui/input";
import FileUpload from "./FileUpload";
import { createServer } from "@/lib/actions/server.action";
import { Button } from "../ui/button";
const ServersSidebar = () => {
  const form = useForm<z.infer<typeof serverSchema>>({
    resolver: zodResolver(serverSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const { isSubmitting } = form.formState;
  const onSubmit = async (values: z.infer<typeof serverSchema>) => {
    try {
      const server = await createServer({
        name: values.name,
        imageUrl: values.imageUrl,
      });
      console.log(server);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-light-300 dark:bg-[#13181E] w-20 min-h-full bg-sidebar max-h-screen fixed flex flex-col justify-between">
      <div className=" mt-5 flex flex-col gap-4 mx-auto">
        <div className=" flex  space-x-1 mx-auto">
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-red"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-yellow"></span>
          <span className="  min-w-[10px] min-h-[10px] rounded-full bg-green"></span>
        </div>

        <Modal
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

            <div className="flex flex-col gap-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" flex flex-col gap-3"
                >
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormDescription>
                          <FileUpload
                            endpoint="serverImage"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            className=" outline-none w-full px-3 rounded-md text-xl py-3 bg-white-200 ring-0 focus-within:ring-0 border-none dark:bg-dark-200"
                            placeholder="Enter Server name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className=" w-full text-light-200 rounded-md px-3 py-2 bg-green"
                  >
                    {isSubmitting ? "Creating Server..." : "Create"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Modal>

        <hr className=" w-full px-3 mx-auto border border-light-500 dark:border-dark-200" />
        {fakeServers.map((server) => {
          return <ServerCard key={server.id} server={server} />;
        })}
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
