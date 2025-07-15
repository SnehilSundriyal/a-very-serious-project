import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
                       ...props
                     }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
                              ...props
                            }: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
      <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
                             ...props
                           }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
      <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
                              className,
                              ...props
                            }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
      <AlertDialogPrimitive.Overlay
          data-slot="alert-dialog-overlay"
          className={cn(
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-gradient-to-br from-black/60 via-[#142D4C]/40 to-[#F49BAB]/30 backdrop-blur-sm",
              className
          )}
          {...props}
      />
  )
}

function AlertDialogContent({
                              className,
                              ...props
                            }: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            data-slot="alert-dialog-content"
            className={cn(
                "bg-gradient-to-br from-white via-pink-50 to-[#F49BAB]/10 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-6 rounded-2xl border-2 border-[#F49BAB]/50 p-8 shadow-2xl shadow-[#142D4C]/20 duration-300 sm:max-w-lg",
                className
            )}
            {...props}
        />
      </AlertDialogPortal>
  )
}

function AlertDialogHeader({
                             className,
                             ...props
                           }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="alert-dialog-header"
          className={cn("flex flex-col gap-3 text-center sm:text-left border-b border-[#F49BAB]/30 pb-4", className)}
          {...props}
      />
  )
}

function AlertDialogFooter({
                             className,
                             ...props
                           }: React.ComponentProps<"div">) {
  return (
      <div
          data-slot="alert-dialog-footer"
          className={cn(
              "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4 border-t border-[#F49BAB]/30",
              className
          )}
          {...props}
      />
  )
}

function AlertDialogTitle({
                            className,
                            ...props
                          }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
      <AlertDialogPrimitive.Title
          data-slot="alert-dialog-title"
          className={cn("text-2xl font-bold text-[#AF3E3E] drop-shadow-sm", className)}
          {...props}
      />
  )
}

function AlertDialogDescription({
                                  className,
                                  ...props
                                }: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
      <AlertDialogPrimitive.Description
          data-slot="alert-dialog-description"
          className={cn("text-[#142D4C] text-base leading-relaxed font-medium", className)}
          {...props}
      />
  )
}

function AlertDialogAction({
                             className,
                             ...props
                           }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
      <AlertDialogPrimitive.Action
          className={cn(
              buttonVariants(),
              "bg-gradient-to-r from-[#F49BAB] to-[#E088A0] hover:from-[#E088A0] hover:to-[#D077A0] text-white border-2 border-[#AF3E3E]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold px-6 py-3 rounded-xl",
              className
          )}
          {...props}
      />
  )
}

function AlertDialogCancel({
                             className,
                             ...props
                           }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
      <AlertDialogPrimitive.Cancel
          className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-white/70 hover:bg-white/90 text-[#142D4C] border-2 border-[#142D4C]/30 hover:border-[#142D4C]/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold px-6 py-3 rounded-xl backdrop-blur-sm",
              className
          )}
          {...props}
      />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}