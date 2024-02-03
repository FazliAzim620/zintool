import Bookmarks from "@/component/Bookmarks";
import Carousel from "@/component/Carousel";
import Footer from "@/component/Footer";
import Menu from "@/component/Menu";
import Navbar from "@/component/Navbar";

export default function Home() {
  const data=[
    {icon:"fa-solid fa-file-pdf",
    title:'Edit Pdf',
    desc:'use the best online tool to edit pdfs in your browser.',
    bgcolor:'#E18259'
},
    {icon:" fa-solid fa-crop ",
    title:'Crop Pdf',
    desc:'Crop PDF online to a selected area,adjust margin size...',
    bgcolor:'#E18259'
},
    {icon:"fa-solid fa-text-height",
    title:'Replace Text',
    desc:'the easiest way to replace text online',
    bgcolor:'#E18259'
},
    {icon:" fa-solid fa-file-arrow-down ",
    title:'Rotate PDF',
    desc:'Rotate and save your PDF page online for free',
    bgcolor:'#E18259'
},
]
const topdf=[
  {icon:"fa-solid fa-file-powerpoint",
  title:'PPT to PDF',
  desc:'Convert Powerpoint to PDF online',
  bgcolor:'#e18b66'
  
},
  {icon:"fa-solid fa-file-word",
  title:'Word to PDF',
  desc:'The best Word to PDF Converter online',
  bgcolor:'#6b93f8'
},
  {icon:"fa-solid fa-text-height",
  title:'Excel to PDF',
  desc:'Eeasily convert Excel Spreadsheet to PDF',
  bgcolor:'#6bb675'
},
  {icon:"fa-solid fa-file-image",
  title:'JPG to PDF',
  desc:'Convert JPG,PNG,BMP,GIF and TIFF images to PDF online',
  bgcolor:'#72bba9'
},
  {icon: "fa-solid fa-file-lines ",
  title:'TXT to PDF',
  desc:'Convert TXT to PDF online for free',
  bgcolor:'#D27F30'
},
]
const frompdf=[
  {icon:"fa-solid fa-file-word",
  title:' PDF to Word',
  desc:'Easily convert PDF to Word document',
  bgcolor:'#6b93f8'
},
  {icon:"fa-solid fa-file-powerpoint",
  title:'PDF to PPT',
  desc:'Convert PDF to Powerpoint online',
  bgcolor:'#e18b66'
},
  {icon:"fa-solid fa-text-height",
  title:'PDF to Excel',
  desc:'Convert PDF to Excel for free',
  bgcolor:'#6bb675'
},
  {icon:"fa-solid fa-file-image",
  title:'PDF to JPF',
  desc:'Convert PDF files to a set of optimized JPG,PNG,BMP,GIF...',
  bgcolor:'#72bba9'
},
  {icon:"fa-solid fa-file-lines ",
  title:'PDF to TXT',
  desc:'Convert your PDF to TXT and extract text form your PDF',
  bgcolor:'#D27F30'
},
]
  return (
    <main className="">
    
    
      <Bookmarks title={'Your Bookmarks'} data={data}/>
      <div className="w-[100%] flex justify-start pl-[5rem]    ">
      <Carousel/>
      </div>
      <Bookmarks title={'Convert from PDF'} data={frompdf}/>
      <Bookmarks title={'Convert to PDF'} data={topdf}/>
       
    </main>
  );
}
