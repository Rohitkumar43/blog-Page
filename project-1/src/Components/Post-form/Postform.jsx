import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {Button , Input , Select , } from '../index';
import appwriteService from '../../Appwrite/database';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function postform(){
    // Here we make a fxn jo batayega ki editor me ae se content hai
    // ya naya dalega ya phir wo set karega 
    const {register , handlesubmit , watch , setValue , control , getValues } = useForm({
        defaultValues: {
            tittle: post?.tittle || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || ""

        }
    });

    // yaha par hum file update karenge nahi toh naya banayenge 
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData)

    const submit = async(data) => {
        if(post){
            data.image[0] ? appwriteService.uploadFile(data.image[0]) : null


            if(File){
                appwriteService.deletefile(post.feauturdImage);
            }
            // update the post through the post id 
            const dbpost = await appwriteService.updatepost(
                post.$id, {
                    ...data,
                    feauturdImage: File ? File.$id: undefined,
                });
                if(dbpost){
                    navigate(`/post/${dbpost.$id}`)
                }    
        } else{
            const file = await appwriteService.uploadFile(data.image[0]);

            if(File){
                const fieldId = File.$id
                data.feauturdImage = fieldId 
                await appwriteService.createpost({
                    ...data,
                    userId: userData.$id,
                })
                if(dbpost){
                    navigate(`/posts/${dbpost.$id}`)
                }
            }
        }

        
    } 


    const slugTranform = useCallback(() => {
        if(value && typeof value == 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')
        }
        return ''

    },[]);

// isse pure code ko phir se samjho that how all the things worked 
    React.useEffect(() => {
        const subscription = watch((value , {name}) => {
            if(name == 'tittle'){
                setValue('slug' , slugTranform(value.tittle),{shouldValidate: true})
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch , slugTranform , setValue])



    return(
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTranform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}


export default postform;