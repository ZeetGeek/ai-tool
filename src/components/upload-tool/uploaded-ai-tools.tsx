import React from 'react';
import Title from '../ui/title';
import Des from '../ui/description';
import { aiToolsData } from '@/data/ai-tools';
import AiToolBox from '../ai-tool-box';
import { Button } from '../ui/button';

const UploadedAiTools = () => {
     return (
          <>
               <section className="uploaded_ai_tools">
                    <div className="container">
                         <div className="center_box">
                              {/* title */}
                              <Title size="h2" className="text-neutral-800">
                                   Your Uploaded AI Tools
                              </Title>
                              {/* description */}
                              <Des size="lg" className="text-neutral-500">
                                   Explore our collection of free AI tools for
                                   all your project needs. No cost, all
                                   innovation.
                              </Des>
                         </div>

                         {/* all ai tools */}
                         <div className="row mt-10 gap-y-6">
                              {aiToolsData.map((item, index) => (
                                   <div
                                        key={index}
                                        className="col-xxl-3 col-lg-4 col-sm-6 col-12 "
                                   >
                                        <AiToolBox {...item} />
                                   </div>
                              ))}
                         </div>

                         {/* load more  */}
                         <div className="mt-10 flex">
                              <Button
                                   name="load more ai tools btn"
                                   size="lg"
                                   className="m-auto"
                              >
                                   Load More AI Tools
                              </Button>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default UploadedAiTools;
