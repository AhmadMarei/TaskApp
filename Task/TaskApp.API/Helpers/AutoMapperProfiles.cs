using AutoMapper;
using TaskApp.API.Dtos;
using TaskApp.API.Models;

namespace TaskApp.API.Helpers
{
    // i use Profile to organize the mapping configurations 
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RoomForUpdateDto, Room>();
            CreateMap<Room, RoomForReturnDto>();
        }
    }
}