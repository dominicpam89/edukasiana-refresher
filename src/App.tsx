import classes from './App.module.css';
import btnClasses from './styles/button.module.css';

export default function App() {
   const btnBprimary = `${btnClasses.btn} ${btnClasses['btn-md']} ${btnClasses['btn-primary']}`;
   const btnBsecondary = `${btnClasses.btn} ${btnClasses['btn-md']} ${btnClasses['btn-secondary']}`;
   const btnBdanger = `${btnClasses.btn} ${btnClasses['btn-md']} ${btnClasses['btn-danger']}`;
   const btnBoutlinePrimary = `${btnClasses.btn} ${btnClasses['btn-md']} ${btnClasses['btn-outline-primary']}`;
   const btnBgradient = `${btnClasses.btn} ${btnClasses['btn-md']} ${btnClasses['btn-gradient']}`;
   return (
      <main className={classes.main}>
         <h1>Tailwind is Great!</h1>
         <button className={btnBprimary}>Primary</button>
         <button className={btnBsecondary}>
            Secondary
         </button>
         <button className={btnBdanger}>Danger</button>
         <button className={btnBoutlinePrimary}>
            Outline
         </button>
         <button className={btnBgradient}>Gradient</button>
      </main>
   );
}
