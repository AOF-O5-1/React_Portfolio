 import React from 'react';
 
 const useScrollSpy = (sectionIds) => {
     const [activeId, setActiveId] = React.useState('');
   
     React.useEffect(() => {
       const handleScroll = () => {
         const offsets = sectionIds.map((id) => {
           const element = document.getElementById(id);
           return {
             id,
             offset: element?.offsetTop || 0,
             height: element?.offsetHeight || 0,
           };
         });
   
         const scrollPosition = window.scrollY + 100; 
         const activeSection = offsets.find(
           (section) =>
             scrollPosition >= section.offset &&
             scrollPosition < section.offset + section.height
         );
   
         setActiveId(activeSection?.id || '');
       };
   
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
     }, [sectionIds]);
   
     return activeId;
   };
 
   export default useScrollSpy;
 