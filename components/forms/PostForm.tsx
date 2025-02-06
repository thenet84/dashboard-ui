'use client'

import { PostFormSchema, PostFormSchemaType } from "@/schema/post";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Post } from "@/types/posts";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PostForm = ({ post }: { post?: Post }) => {
    const form = useForm<PostFormSchemaType>({
        resolver: zodResolver(PostFormSchema),
        defaultValues: { ...post },
    });

    const onSubmit = (data: PostFormSchemaType) => {
        console.log('data: ', data);
    }

    return (
        <>
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">Title</FormLabel>
                                <FormControl>
                                    <Input className="bg-slate-100 border-0 focus-visible: ring-0 focus-visible:ring-offset-0 text-black" placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    );
}

export default PostForm;