"use client";

import { useState } from "react";

import { Button, Card, Tabs } from "@/components/ui";

import Geral from "./editor/Geral";
import Imagens from "./editor/Imagens";
import Conteudo from "./editor/Conteudo";
import Design from "./editor/Design";
import GerarIA from "./GerarIA";


export default function EditorSite({ cliente }: any) {


  console.log("EDITOR RENDERIZOU:", cliente.nome);



  const [dados, setDados] = useState({


    nome: cliente.nome ?? "",

    whatsapp: cliente.whatsapp ?? "",

    logo: cliente.logo ?? "",

    imagemHero: cliente.imagemHero ?? "",

    slogan: cliente.site?.slogan ?? "",

    descricao: cliente.site?.descricao ?? "",

    sobre: cliente.site?.sobre ?? "",

    template: cliente.site?.template ?? "premium",


  });



  const [aba, setAba] = useState("Geral");


  const [salvando, setSalvando] = useState(false);




  function alterar(
    campo:string,
    valor:string
  ){


    setDados((prev:any)=>({

      ...prev,

      [campo]:valor

    }));

  }





  function aplicarIA(resultado:any){


    setDados((prev:any)=>({


      ...prev,


      slogan:
      resultado.slogan ?? prev.slogan,


      descricao:
      resultado.descricao ?? prev.descricao,


      sobre:
      resultado.sobre ?? prev.sobre


    }));


  }





  async function salvar(){


    setSalvando(true);



    try{


      const resposta = await fetch(

        "/api/sites/editar",

        {


          method:"POST",


          headers:{


            "Content-Type":"application/json"


          },


          body:JSON.stringify({


            clienteId:cliente.id,


            ...dados


          })


        }

      );




      if(!resposta.ok){

        throw new Error();

      }




      alert("Site atualizado!");




    }catch(error){


      console.log(error);


      alert("Erro ao salvar");



    }finally{


      setSalvando(false);


    }


  }





  return (


    <Card>



      <h2

      className="
      text-3xl
      font-bold
      mb-8
      "

      >

        Editor do site


      </h2>




      <div className="mb-8">


        <GerarIA

          cliente={cliente}

          aplicar={aplicarIA}

        />


      </div>





      <Tabs


        abas={[

          "Geral",

          "Imagens",

          "Conteúdo",

          "Design"

        ]}


        ativa={aba}


        mudar={setAba}


      />





      <div className="mt-8">



        {aba === "Geral" && (


          <Geral

            dados={dados}

            alterar={alterar}

          />


        )}





        {aba === "Imagens" && (


          <Imagens

            dados={dados}

            alterar={alterar}

          />


        )}





        {aba === "Conteúdo" && (


          <Conteudo

            dados={dados}

            alterar={alterar}

          />


        )}





        {aba === "Design" && (


          <Design

            dados={dados}

            alterar={alterar}

          />


        )}



      </div>





      <div className="mt-8">



        <Button


          onClick={salvar}


          disabled={salvando}


        >


          {

          salvando

          ?

          "Salvando..."

          :

          "Salvar alterações"


          }



        </Button>



      </div>




    </Card>


  );


}