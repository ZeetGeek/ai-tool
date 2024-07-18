import {
     Internet,
     MediaImagePlus,
     PageEdit,
     PageFlip,
     Plus,
     Sparks,
     Upload,
} from 'iconoir-react';
import { Input } from '../ui/input';
// style
import '@/style/upload-tool-form.scss';
import { Textarea } from '../ui/textarea';
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';

const UploadToolForm = () => {
     return (
          <>
               <section className="upload_tool_form">
                    <div className="container">
                         <form action="#">
                              <div className="row gap-y-6">
                                   {/* upload logo */}
                                   <div className="col-lg-2">
                                        <div className="form_field">
                                             {/* upload logo */}
                                             <label
                                                  htmlFor="upload_logo"
                                                  className="upload_img"
                                             >
                                                  <input
                                                       className="hidden"
                                                       type="file"
                                                       name="upload ai tool logo"
                                                       id="upload_logo"
                                                  />
                                                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                                                       <Upload
                                                            height={40}
                                                            width={40}
                                                            className="text-neutral-500"
                                                       />
                                                       <p className="text-neutral-500">
                                                            Upload logo. <br />{' '}
                                                            (ensure size is 300
                                                            x 300)
                                                       </p>
                                                  </div>
                                             </label>
                                        </div>
                                   </div>

                                   {/* upload screenshots */}
                                   <div className="col-lg-10">
                                        <div className="form_field h-full">
                                             {/* upload screenshot */}
                                             <label
                                                  htmlFor="upload_screenshot"
                                                  className="upload_img h-full"
                                             >
                                                  <input
                                                       className="hidden"
                                                       type="file"
                                                       name="upload ai tool logo"
                                                       id="upload_screenshot"
                                                  />
                                                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                                                       <MediaImagePlus
                                                            height={40}
                                                            width={40}
                                                            className="text-neutral-500"
                                                       />
                                                       <p className="text-neutral-500">
                                                            Upload your tool's
                                                            image, video, or
                                                            screenshot.
                                                       </p>
                                                  </div>
                                             </label>
                                        </div>
                                   </div>

                                   {/* tool name & pricing */}
                                   <div className="col-lg-3">
                                        <div className="row gap-y-6">
                                             <div className="col-lg-12">
                                                  <div className="form_field">
                                                       <div className="field">
                                                            <Sparks className="icon_24 text-neutral-500" />
                                                            <Input
                                                                 type="text"
                                                                 placeholder="Tool Name"
                                                            />
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="col-lg-12">
                                                  <Select>
                                                       <SelectTrigger className="dropdown_btn upload_tools_dropdown">
                                                            <SelectValue placeholder="Select Pricing" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                            <SelectItem value="1">
                                                                 1
                                                            </SelectItem>
                                                            <SelectItem value="2">
                                                                 2
                                                            </SelectItem>
                                                            <SelectItem value="3">
                                                                 3
                                                            </SelectItem>
                                                            <SelectItem value="4">
                                                                 4
                                                            </SelectItem>
                                                       </SelectContent>
                                                  </Select>
                                             </div>
                                        </div>
                                   </div>

                                   {/* tool website & category */}
                                   <div className="col-lg-3">
                                        <div className="row gap-y-6">
                                             <div className="col-lg-12">
                                                  <div className="form_field">
                                                       <div className="field">
                                                            <Internet className="icon_24 text-neutral-500" />
                                                            <Input
                                                                 type="text"
                                                                 placeholder="Tool Website URL"
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="col-lg-12">
                                                  <Select>
                                                       <SelectTrigger className="dropdown_btn upload_tools_dropdown">
                                                            <SelectValue placeholder="Select Category" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                            <SelectItem value="1">
                                                                 1
                                                            </SelectItem>
                                                            <SelectItem value="2">
                                                                 2
                                                            </SelectItem>
                                                            <SelectItem value="3">
                                                                 3
                                                            </SelectItem>
                                                            <SelectItem value="4">
                                                                 4
                                                            </SelectItem>
                                                       </SelectContent>
                                                  </Select>
                                             </div>
                                        </div>
                                   </div>

                                   {/* detail description */}
                                   <div className="col-lg-3">
                                        <div className="form_field h-full">
                                             <div className="field h-full">
                                                  <PageEdit className="icon_24 text-neutral-500" />
                                                  <Textarea
                                                       className="h-full"
                                                       placeholder="Detailed Description"
                                                  />
                                             </div>
                                        </div>
                                   </div>

                                   {/* social media links */}
                                   <div className="col-lg-3">
                                        <div className="form_field h-full">
                                             <button className="field flex h-full flex-col items-center justify-center px-6">
                                                  <Plus className="icon_24 text-neutral-500" />
                                                  <div className="text-neutral-500">
                                                       Add Social Links
                                                  </div>
                                             </button>
                                        </div>
                                   </div>

                                   {/* brief overview */}
                                   <div className="col-lg-12">
                                        <div className="form_field">
                                             <div className="field h-[500px]">
                                                  <PageFlip className="icon_24 text-neutral-500" />
                                                  <Textarea
                                                       className="h-full"
                                                       placeholder="Brief Overview"
                                                  />
                                             </div>
                                        </div>
                                   </div>

                                   {/* submit button */}
                                   <div className="col-lg-12">
                                        <div className="form_field">
                                             <Button
                                                  className="w-full"
                                                  size="lg"
                                             >
                                                  Upload Tool
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </div>
               </section>
          </>
     );
};

export default UploadToolForm;
