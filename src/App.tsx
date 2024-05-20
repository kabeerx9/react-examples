// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// const App = () => {
//   return (
//     <div className="h-full w-full bg-blue-100 flex justify-center items-center">
//       <Card className="bg-blue-200 h-1/2 w-1/2 ">
//         <CardHeader>
//           <CardTitle>Made by Kabeer 😊</CardTitle>
//           <CardDescription>
//             Just a simple side project for myself to implement react concepts /
//             interesting 3rd party pacakges , and some fun with practice mini
//             challaneges.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="flex flex-col gap-4">
//             <span className="text-semibold text-2xl">Navbar : </span>
//             <span>
//               Left dropdown in for my practice interview mini machine coding
//               challenges
//             </span>
//             <span>
//               Right dropdown is for implementing some fun react concepts to see
//               them in a more visual way .
//             </span>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default App;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const App = () => {
  return (
    <div className="h-full bg-gradient-to-r from-blue-200 to-blue-600 flex justify-center items-center">
      <Card className="bg-white shadow-lg rounded-lg p-8 max-w-3xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Kabeer's Side Project! 👋
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            This side project is a playground for me to explore and implement
            various React concepts, interesting 3rd-party packages, and engage
            in fun practice mini-challenges. It's a space where I can
            experiment, learn, and grow as a developer.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-8">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-2xl font-semibold text-blue-800">
                Sidebar:
              </span>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>
                  The sidebar provides easy navigation to different sections of
                  the project. It allows you to quickly access various features
                  and components.
                </li>
                <li>
                  The "Practice" section in the sidebar contains a collection of
                  practice interview mini machine coding challenges. It's where
                  I sharpen my coding skills and prepare for technical
                  interviews.
                </li>
                <li>
                  The "Interview Challenge" section is dedicated to showcasing
                  interview-specific coding challenges and solutions. It
                  highlights my problem-solving abilities and readiness for
                  technical interviews.
                </li>
                <li>
                  The "Topics" section covers a wide range of React concepts and
                  techniques. It's a place to explore and learn about different
                  aspects of React development.
                </li>
              </ul>
            </div>
            <div>
              <span className="text-2xl font-semibold text-blue-800">
                Purpose:
              </span>
              <p className="mt-2 text-gray-700">
                The purpose of this side project is to provide a hands-on
                learning experience, where I can apply theoretical knowledge to
                practical scenarios. It serves as a testament to my dedication
                to continuous improvement and passion for web development.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
