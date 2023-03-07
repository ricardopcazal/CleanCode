(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getCastByMovieId( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    

    interface Movie{
        title: string;
        description: string; 
        rating: number;
        cast: string[];
    }

    function createMovie( {title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();
