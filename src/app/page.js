"use client";
import { use, useState } from "react";

export default function Home() {

  const [tipo, setTipo] = useState("dinamico");
  const [folder, setFolder] = useState("");
  const [arquivos, setArquivos] = useState("");

  const [domain, setDomain] = useState("");
  const [porta, setPorta] = useState("");

  let codeDinamico = `server {
    server_name ${domain};
    location / {
        proxy_pass http://localhost:${porta};
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`

  let codeEstatico = `server {
    listen 80;
    server_name ${domain};

    root ${folder};
    index ${arquivos};

    location / {
        try_files $uri $uri/ =404;
    }
}`

  return (
    <div className="">
      <div className="isolate">
         <main>
            <section id="home" className="relative z-10 pb-28 pt-10">
               <div className="container">
                  <div className="-mx-4 flex flex-wrap">
                     <div className="w-full px-4">
                        <div>
                           <div className="mx-auto max-w-[720px] text-center">
                              <h1 className="mb-4 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">Generate your config file</h1>
                              <p className="text-body-color-2 mx-auto mb-4 max-w-[620px] text-lg font-medium dark:text-white">Insert all information below to generate your config file.</p>
                           </div>
                        </div>
                     </div>

                     <div className="w-full px-4 w-100">
                        <div>
                            <div className="sm:14 wow fadeInUp dark:bg-dark rounded-md bg-white px-8 py-4" data-wow-delay="0s">
                              <form>
                                

                                <div className="flex">
                                  <div className="w-full px-4 w-40">
                                    <div className="mb-5">
                                      <label htmlFor="dinamico" className="text-dark mb-2 text-sm font-medium dark:text-white">
                                      <input 
                                        id="dinamico" 
                                        type="radio" 
                                        name="tipo"
                                        value="dinamico"
                                        onChange={(e)=>{setTipo("dinamico")}}
                                        defaultChecked
                                      /> Dinamico  
                                      </label>

                                      <label htmlFor="estatico" className="text-dark mb-2 ml-4 text-sm font-medium dark:text-white">
                                      <input 
                                        id="estatico" 
                                        type="radio" 
                                        name="tipo"
                                        value="estatico" 
                                        onChange={(e)=>{setTipo("estatico")}} 
                                      /> Estático  
                                      </label>
                                    </div>

                                    <div className="mb-5">
                                      <label htmlFor="domain" className="text-dark mb-2 block text-sm font-medium dark:text-white">Dominio/subdominio</label>
                                      <input 
                                        id="domain" 
                                        type="text" 
                                        name="domain" 
                                        placeholder="Insira seu dominio" 
                                        className="text-body-color text-xsfocus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5"
                                        onChange={(e)=>{setDomain(e.target.value)}} 
                                      />
                                    </div>

                                  {tipo === "dinamico" || tipo ==="" ? (
                                    <div className="mb-5">
                                      <label htmlFor="porta" className="text-dark mb-2 block text-sm font-medium dark:text-white">Porta</label>
                                      <input id="porta" 
                                          type="text" 
                                          name="porta" 
                                          placeholder="Insira número da porta" 
                                          className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5" 
                                          onChange={(e)=>{setPorta(e.target.value)}}  
                                        />
                                    </div>
                                  ) : null}

                                  {tipo === "estatico" ? (
                                    <div className="mb-5">
                                      <label htmlFor="folder" className="text-dark mb-2 block text-sm font-medium dark:text-white">Folder</label>
                                      <input id="folder" 
                                          type="text" 
                                          name="folder" 
                                          placeholder="Insira a pasta do site" 
                                          className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5" 
                                          onChange={(e)=>{setFolder(e.target.value)}}  
                                        />
                                    </div>
                                  ) : null}

                                  {tipo === "estatico" ? (
                                    <div className="mb-5">
                                      <label htmlFor="arquivos" className="text-dark mb-2 block text-sm font-medium dark:text-white">Arquivos</label>
                                      <input id="arquivos" 
                                          type="text" 
                                          name="arquivos" 
                                          placeholder="Insira os arquivos na ordem (index.html index.htm index.php)" 
                                          className="text-body-color focus:border-primary w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-hidden dark:border-[#E9E9E9]/20 dark:bg-white/5" 
                                          onChange={(e)=>{setArquivos(e.target.value)}}  
                                        />
                                    </div>
                                  ) : null}
                                    
                                  </div>

                                  <div className="w-full px-4 w-40 h-[230px]">
                                    <p className="py-2">{tipo}</p>
                                    <pre className="p-4 text-xs bg-gray-100 rounded-lg h-full overflow-auto">
                                      <code>
                                        {tipo === "estatico" ? codeEstatico : codeDinamico}
                                      </code>
                                    </pre>
                                  </div>
                                </div>

                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download file</button>
                              </form>
                            </div>
                        </div>
                      </div>
                  </div>
               </div>
               <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20" style={{backgroundImage: "linear-gradient(rgb(62, 125, 255) 0%, rgba(62, 125, 255, 0) 100%)"}}></div>
               <img alt="shape" loading="lazy" width="411" height="276" decoding="async" data-nimg="1" className="absolute left-0 top-0 -z-10" src="hero-shape-1.svg" style={{color: "transparent"}} />
               <img alt="shape" loading="lazy" width="820" height="692" decoding="async" data-nimg="1" className="absolute right-0 top-0 -z-10" src="hero-shape-2.svg" style={{color: "transparent"}} />
            </section>
         </main>
      </div>
    </div>
  );
}
