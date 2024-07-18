import PageIntro from '@/components/page-into';
import Des from '@/components/ui/description';
import Title from '@/components/ui/title';
import UploadToolForm from '@/components/upload-tool/upload-tool-form';
import UploadedAiTools from '@/components/upload-tool/uploaded-ai-tools';

const UploadTool = () => {
     return (
          <>
               <div className="upload_tool">
                    {/* page intro */}
                    <PageIntro
                         home={{
                              title: 'Home',
                              href: '/',
                         }}
                    >
                         <Title size="h1">
                              Upload Your{' '}
                              <span className="highlight">AI Tool</span>
                         </Title>
                         <Des size="lg">
                              Share your AI tool with our community. Provide
                              detailed information to help users discover and
                              benefit from your innovative solution.
                         </Des>
                    </PageIntro>

                    <div className="mb-30">
                         {/* upload tool form */}
                         <UploadToolForm />
                    </div>

                    <div className="mb-30">
                         {/* uploaded ai tools */}
                         <UploadedAiTools />
                    </div>
               </div>
          </>
     );
};

export default UploadTool;
