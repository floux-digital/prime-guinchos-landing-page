
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
import { Phone, PhoneCall, Smartphone, MessageSquare } from "lucide-react"
import { ReactNode } from "react"

// Define the phone contact data
const phoneContacts = [
  { 
    number: "554899670035", 
    displayNumber: "+55 (48) 9967-0035", 
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
    displayNumber: "+55 (48) 3197-2026", 
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
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Contatos de Emergência</DrawerTitle>
            <DrawerDescription>Escolha uma das opções abaixo para assistência imediata</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col space-y-4">
              {phoneContacts.map((contact, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    {contact.hasWhatsapp ? <Smartphone className="mr-2 text-primary" /> : <Phone className="mr-2 text-primary" />}
                    <span className="font-bold">{contact.displayNumber}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      size="sm"
                      onClick={() => window.open(formatPhoneUrl(contact.number), "_blank")}
                    >
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Ligar
                    </Button>
                    
                    {contact.hasWhatsapp && (
                      <Button 
                        variant="outline" 
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                        size="sm"
                        onClick={() => window.open(formatWhatsAppUrl(contact.number), "_blank")}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
