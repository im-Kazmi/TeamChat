"use client";
import React from "react";
import z from "zod";
import { Input } from "../ui/input";
import FileUpload from "@/components/shared/FileUpload";
import { createServer } from "@/lib/actions/server.action";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { serverSchema } from "@/lib/validations";

const CreateServer = ({ form }: any) => {
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
  );
};

export default CreateServer;
