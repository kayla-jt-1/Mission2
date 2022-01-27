using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalculaterModel
    {
        [Required]
        [Range(0, 100)]
        public float assignment { get; set; }

        [Required]
        //[Range(0, 100, ErrorMessage = "Value for must be between {0} and {100}.")]
        public float groupProject { get; set; }

        [Required]
        //[Range(0, 100, ErrorMessage = "Value for must be between {0} and {100}.")]
        public float quizzes { get; set; }

        [Required]
        //[Range(0, 100, ErrorMessage = "Value for must be between {0} and {100}.")]
        public float exams { get; set; }

        [Required]
        //[Range(0, 100, ErrorMessage = "Value for must be between {0} and {100}.")]
        public float intex { get; set; }

    }
}
