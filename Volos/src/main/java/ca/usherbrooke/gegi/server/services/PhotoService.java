package ca.usherbrooke.gegi.server.services;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;

@Path("")
public class PhotoService {
    @Context
    HttpServletRequest httpServletRequest;

    final static FileSystem fs = FileSystems.getDefault();

    @GET
    @Path("hasPhoto")
    @Produces("application/json")
    public boolean hasPhoto(@QueryParam("id") Integer id) {
        if (Files.exists(fs.getPath(id.toString() + ".png")))
            return true;
        else
            return false;
    }

    @GET
    @Path("photo")
    @Produces("image/png")
    public byte[] getPhoto(@QueryParam("id") Integer id) {
        try {
            return Files.readAllBytes(fs.getPath(id.toString() + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @POST
    @Path("setPhoto")
    @Consumes("image/png")
    public void setPhoto(@QueryParam("id") Integer id, byte[] image) {
        try {
            Files.write(fs.getPath(id.toString() + ".png"), image);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
