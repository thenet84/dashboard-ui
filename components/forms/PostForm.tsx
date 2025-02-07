'use client'

import { PostFormSchema, PostFormSchemaType } from "@/schema/post";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Post } from "@/types/posts";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PostForm = ({ post }: { post?: Post }) => {
    const form = useForm<PostFormSchemaType>({
        resolver: zodResolver(PostFormSchema),
        defaultValues: { ...post },
    });
    const { toast } = useToast()

    const onSubmit = () => {
        toast({
            title: "Post has been updated successfully",
            description: `Updated by ${post?.author} on ${post?.date}`,
          })
    }

    return (
        <>
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form} >
                <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
                                <FormControl>
                                    <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 focus-visible:ring-offset-0 text-black dark:text-white " placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
                                <FormControl>
                                    <Textarea className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 focus-visible:ring-offset-0 text-black dark:text-white " placeholder="Enter body" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Author</FormLabel>
                                <FormControl>
                                    <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 focus-visible:ring-offset-0 text-black dark:text-white " placeholder="Enter author" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
                                <FormControl>
                                    <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible: ring-0 focus-visible:ring-offset-0 text-black dark:text-white " placeholder="Enter date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                
                <Button className="w-full dark:bg-slate-800 dark:text-white">Edit Post</Button>
                </form>
            </Form>
        </>
    );
}

export default PostForm;