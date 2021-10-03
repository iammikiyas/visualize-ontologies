import { useEffect,useRef, useState } from "react";
import { ForceGraphAR } from 'react-force-graph';
import dynamic from 'next/dynamic';
const NoSSRForceGraphAr = dynamic(() => import('../lib/noSSR/NoSSRForceGraphAr'), {
  ssr: false,
});
const NoSSRForceGraphVr = dynamic(() => import('../lib/noSSR/NoSSRForceGraphVr'), {
	ssr: false,
  });
  const NoSSRForceGraph2d = dynamic(() => import('../lib/noSSR/NoSSRForceGraph2d'), {
	ssr: false,
  });
  const NoSSRForceGraph3d = dynamic(() => import('../lib/noSSR/NoSSRForceGraph3d'), {
	ssr: false,
  });
import {ontoData} from './ontodata'
const VisNetwork: React.FC = () => {
	const [graphData, setGraphData] = useState([])
	const [viewType, setViewType] = useState('2d')
	// fetch('./data.json').then(res => res.json()).then(data => {
	// 	setGraphData(data)
	//   });
	function getObjects(obj, key, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));    
			} else 
			//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
			if (i == key && obj[i] == val || i == key && val == '') { //
				objects.push(obj);
			} else if (obj[i] == val && key == ''){
				//only add if the object is not already in the array
				if (objects.lastIndexOf(obj) == -1){
					objects.push(obj);
				}
			}
		}
		return objects;
	}
		
	function handleView(viewType){
		setViewType(viewType)
	}
	useEffect(() => {
		function genRandomTree(N = 300, reverse = false) {
			return {
			  nodes: [...Array(N).keys()].map(i => ({ id: i })),
				links: [...Array(N).keys()]
			  .filter(id => id)
			  .map(id => ({
				[reverse ? 'target' : 'source']: id,
				[reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
			  }))
			};
		  }
	
	},[])

	  return(
		  <>
		     <div className='flex p-3 items-center'>
            <div onClick={() => setViewType('Ar')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>AR</div>
            <div  onClick={() => setViewType('Vr')}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>VR</div>
            <div  onClick={() => setViewType('2d')}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>2D</div>
            <div  onClick={() => setViewType('3d')}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>3D</div>
        </div>
		{
			viewType == '2d'
			?<NoSSRForceGraph2d
			//   glScale={160}
			//   yOffset={1.8}
			  graphData={ontoData}
			  nodeAutoColorBy="group"
			//   nodeRelSize={5}
			//   nodeVal={node => node.val}
	
			  linkWidth={.5}
			  nodeLabel={node=> `${node.description}`}
			//   nodeOpacity={0.9}
			//   linkOpacity={0.3}
			  linkColor={() => 'darkgrey'}
			  linkThreeObjectExtend={true}
			  cooldownTicks={100}
	
			  //   linkThreeObject={link => {
			//     // extend link with text sprite
			//     const sprite = new SpriteText(`${link.predicate}`);
			//     sprite.color = 'lightgrey';
			//     sprite.textHeight = 3.5;
				
			//     return sprite;
			//   }}
			//   linkPositionUpdate={(sprite, { start, end }) => {
			//     const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
			//       [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
			//     })));
				
			//     // Position sprite
			//     Object.assign(sprite.position, middlePos);
			//   }}
			  linkDirectionalArrowLength={1.5}
			  linkDirectionalArrowRelPos={1}
			//   linkDirectionalParticles={10}
			//   linkDirectionalParticleColor={() => "red"}
			  linkCurvature={0.25}	
					
			/> :null
		 }{ viewType == 'Vr' 
				?<NoSSRForceGraphVr
				//   glScale={160}
				//   yOffset={1.8}
				  graphData={ontoData}
				  nodeAutoColorBy="group"
				//   nodeRelSize={5}
				//   nodeVal={node => node.val}
		
				  linkWidth={.5}
				  nodeLabel={node=> `${node.description}`}
				  nodeOpacity={0.9}
				  linkOpacity={0.3}
				  linkColor={() => 'darkgrey'}
				  linkThreeObjectExtend={true}
				  cooldownTicks={100}
		
				  //   linkThreeObject={link => {
				//     // extend link with text sprite
				//     const sprite = new SpriteText(`${link.predicate}`);
				//     sprite.color = 'lightgrey';
				//     sprite.textHeight = 3.5;
					
				//     return sprite;
				//   }}
				//   linkPositionUpdate={(sprite, { start, end }) => {
				//     const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
				//       [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
				//     })));
					
				//     // Position sprite
				//     Object.assign(sprite.position, middlePos);
				//   }}
				  linkDirectionalArrowLength={1.5}
				  linkDirectionalArrowRelPos={1}
				  linkDirectionalParticles={10}
				  linkDirectionalParticleColor={() => "red"}
				  linkCurvature={0.25}	
						
				/>:null
		}{ viewType == 'Ar'
					?<NoSSRForceGraphAr
					//   glScale={160}
					//   yOffset={1.8}
					  graphData={ontoData}
					  nodeAutoColorBy="group"
					//   nodeRelSize={5}
					//   nodeVal={node => node.val}
			
					  linkWidth={.5}
					  nodeLabel={node=> `${node.description}`}
					  nodeOpacity={0.9}
					  linkOpacity={0.3}
					  linkColor={() => 'darkgrey'}
					  linkThreeObjectExtend={true}
					  cooldownTicks={100}
			
					  //   linkThreeObject={link => {
					//     // extend link with text sprite
					//     const sprite = new SpriteText(`${link.predicate}`);
					//     sprite.color = 'lightgrey';
					//     sprite.textHeight = 3.5;
						
					//     return sprite;
					//   }}
					//   linkPositionUpdate={(sprite, { start, end }) => {
					//     const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
					//       [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
					//     })));
						
					//     // Position sprite
					//     Object.assign(sprite.position, middlePos);
					//   }}
					  linkDirectionalArrowLength={1.5}
					  linkDirectionalArrowRelPos={1}
					  linkDirectionalParticles={10}
					  linkDirectionalParticleColor={() => "red"}
					  linkCurvature={0.25}	
							
					/>:null
	 } {viewType == '3d' 
					?<NoSSRForceGraph3d
					//   glScale={160}
					//   yOffset={1.8}
					  graphData={ontoData}
					  nodeAutoColorBy="group"
					//   nodeRelSize={5}
					//   nodeVal={node => node.val}
			
					  linkWidth={.5}
					  nodeLabel={node=> `${node.description}`}
					  nodeOpacity={0.9}
					  linkOpacity={0.3}
					  linkColor={() => 'darkgrey'}
					  linkThreeObjectExtend={true}
					  cooldownTicks={100}
			
					  //   linkThreeObject={link => {
					//     // extend link with text sprite
					//     const sprite = new SpriteText(`${link.predicate}`);
					//     sprite.color = 'lightgrey';
					//     sprite.textHeight = 3.5;
						
					//     return sprite;
					//   }}
					//   linkPositionUpdate={(sprite, { start, end }) => {
					//     const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
					//       [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
					//     })));
						
					//     // Position sprite
					//     Object.assign(sprite.position, middlePos);
					//   }}
					  linkDirectionalArrowLength={1.5}
					  linkDirectionalArrowRelPos={1}
					  linkDirectionalParticles={10}
					  linkDirectionalParticleColor={() => "red"}
					  linkCurvature={0.25}	
							
					/>
					:null
					
		}
		
		</>
	  );
};

export default VisNetwork;