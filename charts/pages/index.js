import styles from "@/styles/Home.module.css";
import VerticalBar from "@/components/VerticalBar";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
       <div>
       <VerticalBar/>
       </div>
       <div>
       <HorizontalChart/>
       </div>
       <div>
        <PieChart/>
        </div>
      </main>
    </>
  );
}
