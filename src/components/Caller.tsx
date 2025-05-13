
"use client"
 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import IconPhone from "./IconPhone"
import IconWhatsApp from "./IconWhatsapp"
import { Phone, PhoneCall, Smartphone, MessageSquare, Icon } from "lucide-react"
import { ReactNode } from "react"

// Define the phone contact data
const phoneContacts = [
  { 
    number: "554899670035", 
    displayNumber: "(48) 99967 00 35", 
    hasWhatsapp: true,
    description: "Atendimento via telefone e WhatsApp"
  },
  { 
    number: "5508005550885", 
    displayNumber: "0800 555 0885", 
    hasWhatsapp: false,
    description: "Atendimento gratuito 24 horas"
  },
  { 
    number: "5508005910883", 
    displayNumber: "0800 591 0883", 
    hasWhatsapp: false,
    description: "Atendimento gratuito 24 horas"
  },
  { 
    number: "554831972026", 
    displayNumber: "(48) 3197 20 26", 
    hasWhatsapp: false,
    description: "Atendimento comercial"
  },
]

interface CallerProps {
  children?: ReactNode;
}

export function Caller({ children }: CallerProps) {

  const formatWhatsAppUrl = (number: string) => {
    return `https://api.whatsapp.com/send?phone=${number}&text=Estou%20em%20uma%20emergencia%20e%20preciso%20de%20assistencia%21`;
  };
  
  const formatPhoneUrl = (number: string) => {
    return `tel://${number}`;
  };
 
  return (
    <Drawer>
      
      <DrawerTrigger asChild>
        {children || <Button variant="outline">Ligar Agora</Button>}
      </DrawerTrigger>

      <DrawerContent>
        
        <div className="mx-auto w-full max-w-sm p-[1.5rem]">
          
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Disponíveis 24h
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Utilize os botões para fazer uma ligação telefônica ou enviar mensagem no WhatsApp.
            </DrawerDescription>
          </DrawerHeader>

          <div className="pt-4 pb-0">
              
              {phoneContacts.map((contact, index) => (
              
                <div key={index} className="flex flex-row items-center justify-between py-3 border-b">
              
                  
                  <span className="font-bold">{contact.displayNumber}</span>
                  
                  <div className="flex space-x-2">
                    
                    {contact.hasWhatsapp && (
                      <Button 
                        className="flex-1 rounded-full bg-green-400 hover:bg-green-500 hover:text-white"
                        size="icon"
                        onClick={() => window.open(formatWhatsAppUrl(contact.number), "_blank")}
                      >
                        <IconWhatsApp fill="#FFF"/>
                      </Button>
                    )}

                    <Button  
                      className="rounded-full conversion-click"
                      size="icon"
                      onClick={() => window.open(formatPhoneUrl(contact.number), "_blank")}
                    >
                      <IconPhone fill="#FFF" />
                    </Button>
                    
                    
                  </div>
                </div>
              ))}
            
          </div>
          
          <DrawerFooter className="px-0">
            <DrawerClose asChild>
              <Button 
                variant="outline" 
                className="conversion-click border-2 font-[800] border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                  Fechar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
