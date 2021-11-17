import { Callprofile } from './CallProfile'

export function Mvs({ profiles,setProfiles,id }) {
  return (
    <section className="container">
    {profiles.map((pv,id)=>
      <Callprofile pv={pv} id={id} profiles={profiles} setProfiles={setProfiles}/>      
  )}
    </section>
  );
}