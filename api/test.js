const MsfRpc = require('msfrpc');
 
const msfrpcUri = 'http://user:pass123@192.168.43.179:55555';
const msfrpc = new MsfRpc(msfrpcUri);
 
console.log(`Connecting to ${msfrpcUri}`);





msfrpc.connect().then(() => {
  /*
  return msfrpc.core.version().then((res) => {

    console.log(`Metasploit Framework version ${res.version}`);
  
    }).then(() => {*/
    
    const keyword = 'linux'; //after nmap scan

    console.log(`Search modules containing "${keyword}". This may take a few seconds...`);
    
    return msfrpc.module.search(keyword).then((modul) => {
      
      console.log(`Found the ${modul.length} modules for "${keyword}":`);
      
      var count=0;
      modul.forEach((module) => {
        console.log('=========', module.fullname);
        console.log('  Name', module.name);
        console.log('  Type', module.type);
        console.log('  Rank', module.rank);
        count++;
        if(module.disclosuredate) {
          console.log('  Date', module.disclosuredate);
        }

      });
      console.log(count);


    });
  //});
});


/*



*/