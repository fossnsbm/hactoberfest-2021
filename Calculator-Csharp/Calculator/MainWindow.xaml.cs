using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Calculator
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        void setoperator(string op)
        {
            string c = (string)Result.Text;
            if (c.Substring(c.Length-1,1)==".") 
            {
                Result.Text = Result.Text + "0" + op + " "; 
            }
            else
            {
                if(c.EndsWith(""))
                {
                    Result.Text = c.Substring(0, c.IndexOf("")) + "" + op + "";
                }
                else
                {
                    if(c.Contains("+")|| c.Contains("+") || c.Contains("+") || c.Contains("+"))
                    {
                        Calcul();

                        Result.Text=Result.Text+" "+op+" ";
                    }
                }
            }
        }
        void Calcul()
        {
            string c = (string)Result.Text;
            string[] tokens = c.Split(' ');
            float a = float.Parse(tokens[0]);
            float b = float.Parse(tokens[2]);
            float res = 0;

            if (tokens[1] == "+")
                res = a + b;
            
            else if (tokens[1] == "-")
            {
                res = a - b;
            }
            else if (tokens[1] == "x")
            {
                res = a * b;
            }
            else if (tokens[1] == "/")
            {
                res = a / b;
            }
            Result.Text = res.ToString();

        }
        private void zerobtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "0";
        }
        private void _1btn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "1";
        }

        private void twobtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "2";
        }

        private void threebtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "3";
        }

        private void fourbtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "4";
        }

        private void fivebtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "5";

        }

        private void sixbtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "6";
        }

        private void sevenbtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "7";
        }

        private void eightbtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "8";
        }

        private void ninebtn_Click(object sender, RoutedEventArgs e)
        {
            if (Result.Text == "0")
                Result.Clear();
            Result.Text = Result.Text + "9";
        }

        private void dot_Click(object sender, RoutedEventArgs e)
        {
            string c = (string)Result.Text;
            if (!(c.EndsWith(".")))
            {
                if (c.EndsWith(" "))
                    Result.Text = Result.Text + "0.";
                else
                    Result.Text = Result.Text + ".";
            }
           
           
        }

        private void add_Click(object sender, RoutedEventArgs e)
        {
            
            setoperator("+");

        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Result.Clear();
            Result.Text = Result.Text + "0";
        }

        private void sub_Click(object sender, RoutedEventArgs e)
        {
            setoperator("-");
        }

        private void mult_Click(object sender, RoutedEventArgs e)
        {
            setoperator("*");
        }

        private void div_Click(object sender, RoutedEventArgs e)
        {
            setoperator("/");
        }

        private void equal_Click(object sender, RoutedEventArgs e)
        {
            string c = (string)Result.Text;
            if(c.EndsWith(" "))
            {
                if (c.Contains("%"))
                {
                    float f =float.Parse(c.Substring(0, c.IndexOf(" ")))/100;
                    Result.Text = f.ToString();
                }
                else
                {
                    Result.Text = c.Substring(0, c.IndexOf(" "));
                }
            }
            else
            {
                Calcul();
            }
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            string c = (string)Result.Text;
            if (c.EndsWith(" "))
            {
                c = c + "0";
            }
            if (c.Contains(" "))
            {
                string ch = c.Substring(0, c.LastIndexOf(" ", c.Length - 1));
                float f = float.Parse(ch);
                f = f / 100;
                Result.Text =c.Substring(0,c.LastIndexOf(" ")+1)+f.ToString();
            }
            else
            {
                float f = float.Parse(c);
                f = f / 100;
                Result.Text = f.ToString(); 
            }
        }
    }
}
