import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const App = () => {
  return (
    <div className="h-full w-full bg-blue-100 flex justify-center items-center">
      <Card className="bg-blue-200 h-1/2 w-1/2 ">
        <CardHeader>
          <CardTitle>Made by Kabeer 😊</CardTitle>
          <CardDescription>
            Just a simple side project for myself to implement react concepts /
            interesting 3rd party pacakges , and some fun with practice mini
            challaneges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <span className="text-semibold text-2xl">Navbar : </span>
            <span>
              Left dropdown in for my practice interview mini machine coding
              challenges
            </span>
            <span>
              Right dropdown is for implementing some fun react concepts to see
              them in a more visual way .
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
