# Projeto em React Js

* Com Fetch API() - Link do Projeto em Producao [AppNutri - ReactJs](https://reactappnutri.netlify.app/).

```

function loadApi() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r)=> r.json())
        .then((json)=> {
          console.log(json);
          setNutri(json);
        })
        .catch(()=> {
          console.log(`Ops Algo deu Errado`);
        })
      }

      loadApi();

    }, [])

```



