// src/pages/About.js
import React from 'react'
import TorontoIslands from "../app/images/torontoislands.jpg";
import CNTower from "../app/images/cntower.jpg";

const About = () => {
  return (
  <div className="w3-container">
    <h1 className="w3-center myheading1">About Us</h1>
    <img src={TorontoIslands} className="img_responsive" alt="Toronto Islands" title="Toronto Islands" />

    <p>Aft yard American Main parley lad barque hearties. Parley pressgang run a shot across the bow pinnace trysail gangway main sheet. Crimp parley parrel black jack crack Jennys tea cup knave rutters.</p>
    <p>Wench heave down fire ship bilge rat belaying pin Sink me yardarm. Stern Jack Tar landlubber or just lubber squiffy Chain Shot gangway pressgang. Fire in the hole marooned aye draft parley measured fer yer chains Gold Road.</p>
    <img src={CNTower} className="img_responsive" alt="CN Tower" title="CN Tower" />

    <p>Heave to Barbary Coast crimp snow quarterdeck man-of-war spyglass. Snow cable splice the main brace yardarm mizzen topsail bounty. Holystone lugger Sink me rutters tack bilged on her anchor deadlights.</p>
  </div>
  )
}

export default About
