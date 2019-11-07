import config from 'config';
import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
//  host: config.elasticsearch.host + ':' + config.elasticsearch.port
    host: {
            host: config.elasticsearch.host,
            protocol: 'https',
            port: config.elasticsearch.port,
	    headers: {
	    	"Date": new Date()
	    }
          }
});

export default client;
