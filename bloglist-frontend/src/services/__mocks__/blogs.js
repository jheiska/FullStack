let token = null

const blogs = [
{
__v:0,
_id:"5a9bea50e504363398a46d11",
author:"testikirjailija",
likes:0,
title:"uusi blogi",
url:"uusiblogiurli",
}, {
__v:0,
_id:"5a9bd439e504363398a46d10",
author:"kirjoittava testaaja",
likes:0,
title:"testikirjoitus",
url:"blogi.com"
}
]

const getAll = () => {
    return Promise.resolve(blogs)
  }
  
export default { getAll, blogs }