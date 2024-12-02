import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Plus, StarsIcon } from "lucide-react";

const softwareDetailsList = [
  {
    mainheading: "Software",
  },
];

const digitalMarketingDetailsList = [
  {
    mainheading: "Marketing",
  },
];

const educationalCoursesDetailsList = [
  {
    mainheading: "Education",
  },
];

export const AdminNavbarContent = () => {
  return (
    <div className="max-w-[95%] mx-auto bg-white m-5">
      <div className="py-4 pb-6 flex items-center justify-center gap-2">
        <StarsIcon className="w-8 h-8 text-[#3c50e0]" />
        <h1 className="text-3xl text-[#3c50e0] font-semibold">
          Manage Website Navigation Content
        </h1>
      </div>

      <Tabs defaultValue="software" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[100%] mx-auto">
          {/* Software Tab */}
          {softwareDetailsList.length > 0 &&
            softwareDetailsList[0]?.mainheading && (
              <TabsTrigger value="software">
                {softwareDetailsList[0]?.mainheading}
              </TabsTrigger>
            )}

          {/* Marketing Tab */}
          {digitalMarketingDetailsList.length > 0 &&
            digitalMarketingDetailsList[0]?.mainheading && (
              <TabsTrigger value="marketing">
                {digitalMarketingDetailsList[0]?.mainheading}
              </TabsTrigger>
            )}

          {/* Education Tab */}
          {educationalCoursesDetailsList.length > 0 &&
            educationalCoursesDetailsList[0]?.mainheading && (
              <TabsTrigger value="education">
                {educationalCoursesDetailsList[0]?.mainheading}
              </TabsTrigger>
            )}
        </TabsList>

        <TabsContent value="software" className="mt-2">
          <Card className="w-full">
          <CardHeader className="bg-gray-50 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <CardTitle className="text-[#3c50e0] ">
                  {softwareDetailsList[0].mainheading} Menu
                </CardTitle>

                {/* Dialog button start */}
                <Dialog>
                  <DialogTrigger asChild>
                  <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-[#3c50e0] text-[#3c50e0] hover:bg-[#3c50e0] hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" /> Insert Nav Items
                    </Button>
                  </DialogTrigger>

                  {/* Insert Nav Details */}
                  {/* <InsertNavDetails /> */}
                </Dialog>
                {/* Dialog button End */}
              </div>
            </CardHeader>

          
            {/* ShowAllNavDetails */}
            {/* <ShowAllNavDetails/> */}
            <CardContent className="p-4">
              {/* Placeholder for navigation details */}
              <div className="text-center text-gray-500 py-10">
                <p>No navigation items found. Click "Insert Nav Items" to add.</p>
              </div>
            </CardContent>

          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminNavbarContent;
