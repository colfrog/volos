package ca.usherbrooke.gegi.server.injection;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath(RestApplicationPathConfig.ROOT)
public class RestApplicationPathConfig extends Application {

    public static final String ROOT = "api";
}
