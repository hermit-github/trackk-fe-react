
import MainLayout from "../components/Layouts/MainLayout"
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";

const HomeContent = () => {
    const counterValue = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>

      <p className="text-gray-600">This is the home page.</p>
        <p className="text-gray-600 mt-4">Counter Value: {counterValue}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2" onClick={() => dispatch(increment(4))}>
          Increment Counter
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded mt-2 ml-2" onClick={() => dispatch(decrement(4))}>
          Decrement Counter
        </button>
    </div>
  );
};

export default function HomePage() {
  return (
    <MainLayout header={<Header />} sidebar={<Sidebar />} body={<HomeContent />} />
  );
}
