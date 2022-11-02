import React from "react";
import { ReactDOM } from "react";
import Picclass from "./Picclass";
import entries from "./Data/Photo_entries";

class Photoentry extends React.Component{
    render(){
        console.log(entries);
        return (
        <div>
          {entries.itemlist.map((photo) => {
                return <Picclass key={photo.src} src={photo.src}
                location={photo.location} caption={photo.caption} />

            })
            }
                        {/* <Picclass src="kid1.jpeg" location="sheffield, Northern England" caption="Fadlullah, Omobolade"  />
            <Picclass src="kid2.jpeg" location="sheffield, Gleadless England" caption="Fadlullah, Omobolade"  />
            <Picclass src="family.jpeg" location="sheffield, England" caption="Fadlullah, Omobolade"  /> */}
        </div>)
    }
}

export default Photoentry
