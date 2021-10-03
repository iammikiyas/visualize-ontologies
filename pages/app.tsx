import VisNetwork from "../components/OntologyNet"


const App: React.FC = () => {
return(
    <div>     
     
     <VisNetwork/>
     <div className='flex flex-col'>
         <div className='h-72 border-2 '>
             Information about selected ontology
         </div>
         <div className='flex items-center'>
     <div className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>Add a new Relationship</div>

         </div>
     </div>

    </div>
)
}
export default App